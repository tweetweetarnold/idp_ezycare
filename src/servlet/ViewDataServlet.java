package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.hibernate.criterion.CriteriaSpecification;
import org.hibernate.criterion.DetachedCriteria;

import connection.MyConnection;
import ezycare.Entry;

/**
 * Servlet implementation class ViewDataServlet
 */
@WebServlet("/ViewDataServlet")
public class ViewDataServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public ViewDataServlet() {
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

		response.setContentType("text/html");
		PrintWriter out = response.getWriter();

		DetachedCriteria dc = DetachedCriteria.forClass(Entry.class);
		dc.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);

		List<Object> list = MyConnection.queryWithCriteria(dc);

		out.println("<table border=\"2\"><tr><th>id</th><th>intent</th><th>ipaddress</th><th>logDate</th><th>type</th><th>version</th></tr>");
		for (Object o : list) {
			Entry e = (Entry) o;

			out.println("<tr><td>" + e.getId() + "</td>");
			out.println("<td>" + e.getIntent() + "</td>");
			out.println("<td>" + e.getIpAddress() + "</td>");
			out.println("<td>" + e.getLogDate() + "</td>");
			out.println("<td>" + e.getTaskId() + "</td>");
			out.println("<td>" + e.getVersion() + "</td></tr>");

		}
		out.println("</table>");

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
