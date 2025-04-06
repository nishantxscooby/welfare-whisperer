
package com.welfarewhisperer.models;

import java.util.List;
import java.util.ArrayList;

/**
 * Model class representing a government welfare scheme
 */
public class Scheme {
    private String id;
    private String name;
    private String description;
    private List<String> benefits;
    private List<String> documentRequired;
    private String applicationProcess;
    private String website;

    // Constructor
    public Scheme(String id, String name, String description, String applicationProcess, String website) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.applicationProcess = applicationProcess;
        this.website = website;
        this.benefits = new ArrayList<>();
        this.documentRequired = new ArrayList<>();
    }

    // Getters and setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getBenefits() {
        return benefits;
    }

    public void setBenefits(List<String> benefits) {
        this.benefits = benefits;
    }

    public void addBenefit(String benefit) {
        this.benefits.add(benefit);
    }

    public List<String> getDocumentRequired() {
        return documentRequired;
    }

    public void setDocumentRequired(List<String> documentRequired) {
        this.documentRequired = documentRequired;
    }

    public void addRequiredDocument(String document) {
        this.documentRequired.add(document);
    }

    public String getApplicationProcess() {
        return applicationProcess;
    }

    public void setApplicationProcess(String applicationProcess) {
        this.applicationProcess = applicationProcess;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }
}
