const domainSelect = document.getElementById("domain");
const otherDomainInput = document.getElementById("otherDomain");

domainSelect.addEventListener("change", function() {
    if (this.value === "Other") {
        otherDomainInput.style.display = "block";
        otherDomainInput.required = true;
    } else {
        otherDomainInput.style.display = "none";
        otherDomainInput.required = false;
    }
});


let domainValue = domainSelect.value === "Other" ? otherDomainInput.value : domainSelect.value;

document.getElementById("officialForm").addEventListener("submit", function(e){
    e.preventDefault();

    const response = document.getElementById("response");
    response.style.color = "#001f3f";
    response.innerText = "Submitting...";

   
    setTimeout(() => {
        response.style.color = "green";
        response.innerText = "Form submitted successfully!";
        document.getElementById("officialForm").reset();
    }, 1000);
});