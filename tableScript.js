
document.getElementById("user-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications#example_using_object_urls_to_display_images
    const username = document.getElementById("input-username").value;
    const email = document.getElementById("input-email").value;
    const isAdmin = document.getElementById("input-admin").checked ? "X" : "-";
    const imageInput = document.getElementById("input-image");
    const file = imageInput.files[0];

    
    const tableBody = document.querySelector("#user-table tbody");
    const rows = Array.from(tableBody.getElementsByTagName("tr"));
    
    let userExists = rows.some(row => {
        const usernameCell = row.getElementsByTagName("td")[0];
        if (usernameCell.textContent === username) {
            
            const emailCell = row.getElementsByTagName("td")[1];
            const adminCell = row.getElementsByTagName("td")[2];
            
            usernameCell.textContent = username;
            emailCell.textContent = email;
            adminCell.textContent = isAdmin;
            return true; 
        }
        return false;
    });

    if (!userExists) {
        
        const newRow = document.createElement("tr");

        
        const usernameCell = document.createElement("td");
        const emailCell = document.createElement("td");
        const adminCell = document.createElement("td");
        const imageCell = document.createElement("td");

        
        usernameCell.textContent = username;
        emailCell.textContent = email;
        adminCell.textContent = isAdmin;
        

        
        newRow.appendChild(usernameCell);
        newRow.appendChild(emailCell);
        newRow.appendChild(adminCell);
        

        
        tableBody.appendChild(newRow);
    }

    
    document.getElementById("user-form").reset();
});

function emptyTable() {
    
    const tableBody = document.querySelector("#user-table tbody");
    
    
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }
}
