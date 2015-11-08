package servlet;

import java.io.IOException;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import connection.MyConnection;
import ezycare.Entry;

/**
 * Servlet implementation class InsertDataServlet
 */
@WebServlet("/InsertDataServlet")
public class InsertDataServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public InsertDataServlet() {
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
		String taskId = request.getParameter("taskId");
		String version = request.getParameter("version");
		String intent = request.getParameter("intent");
		String ipAddress = request.getParameter("ipAddress");

		MyConnection.save(new Entry(taskId, new Date(), version, intent, ipAddress));
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub

		// String taskId = request.getParameter("taskId");
		// String version = request.getParameter("version");
		// String intent = request.getParameter("intent");
		//
		// MyConnection.save(new Entry(taskId, new Date(), version, intent));

	}
}
