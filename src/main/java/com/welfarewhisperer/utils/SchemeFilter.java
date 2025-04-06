
package com.welfarewhisperer.utils;

import java.util.ArrayList;
import java.util.List;
import com.welfarewhisperer.models.Scheme;
import com.welfarewhisperer.models.UserProfile;

/**
 * Utility class to filter schemes based on user profile
 */
public class SchemeFilter {
    
    public static List<Scheme> getEligibleSchemes(UserProfile userProfile) {
        List<Scheme> allSchemes = SchemeData.getAllSchemes();
        List<Scheme> eligibleSchemes = new ArrayList<>();
        
        for (Scheme scheme : allSchemes) {
            if (isEligible(scheme, userProfile)) {
                eligibleSchemes.add(scheme);
            }
        }
        
        return eligibleSchemes;
    }
    
    private static boolean isEligible(Scheme scheme, UserProfile profile) {
        // This is a simplified example of eligibility logic
        // In a real application, this would have complex rules for each scheme
        
        String schemeId = scheme.getId();
        
        switch (schemeId) {
            case "pm-kisan":
                // Eligible if rural area and occupation is farmer
                return profile.getArea().equalsIgnoreCase("Rural") && 
                       profile.getOccupation().equalsIgnoreCase("Farmer");
                
            case "pmay":
                // Eligible if income is below threshold
                return profile.getIncome() < 300000 || profile.isBplStatus();
                
            case "pmjay":
                // Eligible if BPL or low income
                return profile.isBplStatus() || profile.getIncome() < 250000;
                
            case "pmjdy":
                // Most people are eligible for basic banking
                return true;
                
            default:
                // Default to eligible for demo purposes
                return true;
        }
    }
}
