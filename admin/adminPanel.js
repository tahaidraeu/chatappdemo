// Function to initialize admin control panel
function initAdminPanel() {
    console.log("Admin control panel initialized");
    displayUserData();
}

// Function to fetch and display user data
function displayUserData() {
    const userDataContainer = document.getElementById("user-data");
    // Example user data (replace with actual data retrieval logic)
    const users = [
        { id: 1, username: "user1", email: "user1@example.com" },
        { id: 2, username: "user2", email: "user2@example.com" },
        { id: 3, username: "user3", email: "user3@example.com" }
    ];

    // Display user data in a table
    let tableHtml = "<h2>بيانات المستخدمين</h2><table><tr><th>الرقم التعريفي</th><th>اسم المستخدم</th><th>البريد الإلكتروني</th></tr>";
    users.forEach(user => {
        tableHtml += `<tr><td>${user.id}</td><td>${user.username}</td><td>${user.email}</td></tr>`;
    });
    tableHtml += "</table>";

    // Set HTML content to display user data
    userDataContainer.innerHTML = tableHtml;
}

// Initialize admin control panel
initAdminPanel();
