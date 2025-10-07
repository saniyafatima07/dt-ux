document.getElementById("officialForm").addEventListener("submit", function(e){
    e.preventDefault();

    const response = document.getElementById("response");
    response.style.color = "#001f3f";
    response.innerText = "Submitting...";

    // Dummy JS handler (you can replace with Google Sheets integration)
    setTimeout(() => {
        response.style.color = "green";
        response.innerText = "Form submitted successfully!";
        document.getElementById("officialForm").reset();
    }, 1000);
});