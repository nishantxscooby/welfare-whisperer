
package com.welfarewhisperer.utils;

import java.util.ArrayList;
import java.util.List;
import com.welfarewhisperer.models.Scheme;

/**
 * Utility class to provide sample scheme data
 */
public class SchemeData {
    
    public static List<Scheme> getAllSchemes() {
        List<Scheme> schemes = new ArrayList<>();
        
        // PM Kisan Scheme
        Scheme pmKisan = new Scheme(
            "pm-kisan",
            "PM Kisan Samman Nidhi",
            "Financial assistance to small and marginal farmers",
            "Apply through your local agriculture office or online portal",
            "https://pmkisan.gov.in/"
        );
        pmKisan.addBenefit("₹6,000 per year in three equal installments");
        pmKisan.addBenefit("Direct bank transfer to farmer's account");
        pmKisan.addBenefit("No repayment obligation");
        pmKisan.addRequiredDocument("Aadhaar Card");
        pmKisan.addRequiredDocument("Land Records");
        pmKisan.addRequiredDocument("Bank Account Details");
        schemes.add(pmKisan);
        
        // PMAY Scheme
        Scheme pmay = new Scheme(
            "pmay",
            "Pradhan Mantri Awas Yojana",
            "Housing subsidy for economically weaker sections",
            "Apply through local municipal office or online portal",
            "https://pmaymis.gov.in/"
        );
        pmay.addBenefit("Up to ₹2.67 lakh subsidy for house construction");
        pmay.addBenefit("Lower interest rates on home loans");
        pmay.addBenefit("Houses with basic amenities like toilet and electricity");
        pmay.addRequiredDocument("Aadhaar Card");
        pmay.addRequiredDocument("Income Certificate");
        pmay.addRequiredDocument("BPL Card (if applicable)");
        pmay.addRequiredDocument("Land Documents");
        schemes.add(pmay);
        
        // PMJAY Scheme
        Scheme pmjay = new Scheme(
            "pmjay",
            "Ayushman Bharat (PMJAY)",
            "Health insurance for low-income families",
            "Apply through Ayushman Mitra at empaneled hospitals or Common Service Centers",
            "https://pmjay.gov.in/"
        );
        pmjay.addBenefit("Health coverage up to ₹5 lakh per family per year");
        pmjay.addBenefit("Cashless treatment at empaneled hospitals");
        pmjay.addBenefit("Covers pre and post hospitalization expenses");
        pmjay.addRequiredDocument("Aadhaar Card");
        pmjay.addRequiredDocument("Ration Card/SECC Database Entry");
        pmjay.addRequiredDocument("Family ID");
        schemes.add(pmjay);
        
        // Add more schemes as needed
        Scheme pmjdy = new Scheme(
            "pmjdy",
            "Pradhan Mantri Jan Dhan Yojana",
            "Financial inclusion program for banking services",
            "Apply at any bank branch with required documents",
            "https://pmjdy.gov.in/"
        );
        pmjdy.addBenefit("Zero balance bank account");
        pmjdy.addBenefit("Accident insurance cover of ₹2 lakh");
        pmjdy.addBenefit("RuPay debit card with built-in accident insurance");
        pmjdy.addRequiredDocument("Aadhaar Card");
        pmjdy.addRequiredDocument("Voter ID or Driving License");
        pmjdy.addRequiredDocument("Recent Passport Size Photograph");
        schemes.add(pmjdy);
        
        return schemes;
    }
}
