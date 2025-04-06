
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.List" %>
<%@ page import="com.welfarewhisperer.models.Scheme" %>
<%@ page import="com.welfarewhisperer.models.UserProfile" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eligible Schemes - Welfare Whisperer</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <div class="container">
        <header>
            <div class="header-content">
                <div class="logo">
                    <div class="logo-circle">WW</div>
                    <h1>Welfare Whisperer</h1>
                </div>
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <main>
            <% 
            UserProfile userProfile = (UserProfile) request.getAttribute("userProfile");
            List<Scheme> eligibleSchemes = (List<Scheme>) request.getAttribute("eligibleSchemes");
            %>

            <section class="results-container">
                <div class="results-header">
                    <div>
                        <h2>Your Eligible Schemes</h2>
                        <p class="muted-text">
                            Found <%= eligibleSchemes.size() %> scheme<%= eligibleSchemes.size() != 1 ? "s" : "" %> based on your profile
                        </p>
                    </div>
                    <a href="index.html" class="btn btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="arrow-left-icon">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                        Start New Search
                    </a>
                </div>
                
                <% if (eligibleSchemes.isEmpty()) { %>
                    <div class="card">
                        <div class="card-header">
                            <h3>No Eligible Schemes Found</h3>
                            <p>Based on the information provided, we couldn't find any schemes that match your profile.</p>
                        </div>
                        <div class="card-content">
                            <p class="muted-text">
                                Try adjusting your profile details or check back later as new schemes are added regularly.
                            </p>
                        </div>
                    </div>
                <% } else { %>
                    <div class="scheme-cards">
                        <% for (Scheme scheme : eligibleSchemes) { %>
                            <div class="card scheme-card">
                                <div class="card-header">
                                    <div>
                                        <h3><%= scheme.getName() %></h3>
                                        <p><%= scheme.getDescription() %></p>
                                    </div>
                                    <div class="badge">Government Scheme</div>
                                </div>
                                
                                <div class="card-content">
                                    <h4 class="section-title">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="check-icon">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        Key Benefits
                                    </h4>
                                    <ul class="benefit-list">
                                        <% for (String benefit : scheme.getBenefits()) { %>
                                            <li><%= benefit %></li>
                                        <% } %>
                                    </ul>
                                    
                                    <hr>
                                    
                                    <h4 class="section-title">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="check-icon">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        Required Documents
                                    </h4>
                                    <div class="document-badges">
                                        <% for (String doc : scheme.getDocumentRequired()) { %>
                                            <span class="document-badge"><%= doc %></span>
                                        <% } %>
                                    </div>
                                </div>
                                
                                <div class="card-footer">
                                    <p class="application-info">
                                        <span class="label">How to apply:</span> <%= scheme.getApplicationProcess() %>
                                    </p>
                                    <% if (scheme.getWebsite() != null && !scheme.getWebsite().isEmpty()) { %>
                                        <a href="<%= scheme.getWebsite() %>" target="_blank" class="btn btn-small">
                                            Official Website
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="external-link-icon">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                        </a>
                                    <% } %>
                                </div>
                            </div>
                        <% } %>
                    </div>
                <% } %>
            </section>
        </main>

        <footer>
            <p>© <span id="current-year"></span> Welfare Whisperer • Helping citizens access government schemes</p>
        </footer>
    </div>

    <script>
        document.getElementById('current-year').textContent = new Date().getFullYear();
    </script>
</body>
</html>
