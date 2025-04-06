
package com.welfarewhisperer.servlets;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Servlet to handle requests to the home page
 */
@WebServlet(name = "HomeServlet", urlPatterns = {"", "/index", "/home"})
public class HomeServlet extends HttpServlet {
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        // Forward to the index.html page
        request.getRequestDispatcher("/index.html").forward(request, response);
    }
}
