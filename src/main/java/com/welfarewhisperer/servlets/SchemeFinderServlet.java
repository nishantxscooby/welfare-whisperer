
package com.welfarewhisperer.servlets;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.welfarewhisperer.models.Scheme;
import com.welfarewhisperer.models.UserProfile;
import com.welfarewhisperer.utils.SchemeFilter;

/**
 * Servlet to process the user profile form and find eligible schemes
 */
@WebServlet("/findSchemes")
public class SchemeFinderServlet extends HttpServlet {
    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        try {
            // Create a UserProfile object from form data
            UserProfile userProfile = new UserProfile();
            
            // Parse and set user profile data from the form
            userProfile.setAge(Integer.parseInt(request.getParameter("age")));
            userProfile.setGender(request.getParameter("gender"));
            userProfile.setMaritalStatus(request.getParameter("maritalStatus"));
            userProfile.setDisability(Boolean.parseBoolean(request.getParameter("disability")));
            userProfile.setCaste(request.getParameter("caste"));
            userProfile.setIncome(Double.parseDouble(request.getParameter("income")));
            userProfile.setOccupation(request.getParameter("occupation"));
            userProfile.setBplStatus(Boolean.parseBoolean(request.getParameter("bplStatus")));
            userProfile.setState(request.getParameter("state"));
            userProfile.setArea(request.getParameter("area"));
            userProfile.setEducation(request.getParameter("education"));
            
            // Get eligible schemes based on user profile
            List<Scheme> eligibleSchemes = SchemeFilter.getEligibleSchemes(userProfile);
            
            // Store data in the request scope for the JSP
            request.setAttribute("userProfile", userProfile);
            request.setAttribute("eligibleSchemes", eligibleSchemes);
            
            // Forward to the results page
            request.getRequestDispatcher("/results.jsp").forward(request, response);
            
        } catch (Exception e) {
            // Handle errors
            request.setAttribute("error", "An error occurred: " + e.getMessage());
            request.getRequestDispatcher("/error.jsp").forward(request, response);
        }
    }
}
