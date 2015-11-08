package connection;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.criterion.DetachedCriteria;

public class MyConnection {
	private static SessionFactory sessionFactory;

	// ****** Start of MyConnection methods ******

	static {
		try {
			if (sessionFactory == null) {
				// check if application is on OpenShift, if on OpenShift, sets
				// onOpenshift to true
				boolean onOpenshift = false;
				if (System.getenv("OPENSHIFT_MYSQL_DB_HOST") != null) {
					onOpenshift = true;
				}

				// Setting SessionFactory
				if (onOpenshift) {
					// if application on OpenShift
					sessionFactory = new Configuration().configure("hibernate.cfg.xml")
							.buildSessionFactory();
					System.out.println("hibernate.cfg.xml is loaded");
				} else {
					// if application on localhost
					sessionFactory = new Configuration().configure("hibernate-local.cfg.xml")
							.buildSessionFactory();
					System.out.println("hibernate-local.cfg.xml is loaded");
				}
				System.out.println("SessionFactory is set: " + sessionFactory);
			}
		} catch (HibernateException e) {
			e.printStackTrace();
		}
	}
	public static SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	public static Session getSession() {
		System.out.println("MyConnection getSession is called");
		try {
			Session session = sessionFactory.openSession();
			System.out.println("Session is set: " + session);
			return session;
		} catch (HibernateException e) {
			e.printStackTrace();
		}
		return null;
	}

	public static Session startSession() {
		System.out.println("MyConnection startSession is called");
		try {
			Session session = getSession();
			System.out.println("Session is set: " + session);
			session.beginTransaction();
			System.out.println("Session transaction started");
			return session;
		} catch (HibernateException e) {
			e.printStackTrace();
		}
		return null;
	}

	public static boolean endSession(Session session) {
		System.out.println("MyConnection endSession is called");
		try {
			session.getTransaction().commit();
			System.out.println("Session is committed");
			session.close();
			System.out.println("Session is closed");
			return true;
		} catch (HibernateException e) {
			e.printStackTrace();
		}
		return false;
	}

	public static void delete(Object o) {
		System.out.println("MyConnection: delete");
		Session session = startSession();
		session.delete(o);
		session.getTransaction().commit();
		session.close();
	}

	public static void update(Object o) {
		System.out.println("MyConnection: update");
		Session session = startSession();
		session.update(o);
		session.getTransaction().commit();
		session.close();
	}

	public static Object get(Class objClass, int id) {
		System.out.println("MyConnection: get");
		Session session = startSession();
		Object o = session.get(objClass, id);
		session.close();
		return o;
	}

	public static void save(Object o) {
		System.out.println("MyConnection: save");
		Session session = startSession();
		session.save(o);
		session.getTransaction().commit();
		session.close();
	}

	// ****** End of MyConnection methods ******

	// get objects with criteria
	public static List<Object> queryWithCriteria(DetachedCriteria dc) {
		System.out.println("MyConnection: getWithCriteria");
		Session session = startSession();

		Criteria criteria = dc.getExecutableCriteria(session).setResultTransformer(
				Criteria.DISTINCT_ROOT_ENTITY);
		List<Object> l = criteria.list();

		endSession(session);
		return l;
	}

	public static void closeSessionFactory() {
		try {
			sessionFactory.getCurrentSession().close();
			sessionFactory.close();
			System.out.println("SessionFactory is closed.");
		} catch (Exception e) {
			System.out.println("SessionFactory is already closed.");
		}
	}

}
