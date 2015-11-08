package servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import ezycare.Entry;

/**
 * Servlet implementation class clearData
 */
@WebServlet("/ClearDataServlet")
public class ClearDataServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public ClearDataServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		SessionFactory factory = new Configuration().configure("hibernate-local-create.cfg.xml")
				.buildSessionFactory();
		Session session = factory.openSession();
		session.beginTransaction();
		session.save(new Entry("test", null, "test", "test", "test"));
		session.getTransaction().commit();
		session.close();
		factory.close();
		
		response.sendRedirect("home.html");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
//		SessionFactory factory = new Configuration().configure("hibernate-local-create.cfg.xml")
//				.buildSessionFactory();
//		Session session = factory.openSession();
//		session.beginTransaction();
//		session.save(new Entry("test", null, "test", "test"));
//		session.save(new Entry("test", null, "test", "test"));
//		session.save(new Entry("test", null, "test", "test"));
//		session.getTransaction().commit();
//		session.close();
//		factory.close();
	}

}
