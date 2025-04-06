
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isErrorPage="true" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error - Welfare Whisperer</title>
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
            <section class="error-container">
                <div class="card">
                    <div class="card-header">
                        <h2>Error Occurred</h2>
                    </div>
                    <div class="card-content">
                        <p>We're sorry, but an error occurred while processing your request.</p>
                        <p class="error-message">
                            <%= request.getAttribute("error") != null ? request.getAttribute("error") : "Unknown error" %>
                        </p>
                    </div>
                    <div class="card-footer">
                        <a href="index.html" class="btn btn-primary">Return to Home</a>
                    </div>
                </div>
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
