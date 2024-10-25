// projects.js

// Function to create and append project elements
function createProjects() {
    const projectsDiv = document.getElementById("projects");

    // Iterate over each project category in the projects array
    projects.forEach((category, categoryIndex) => {
        // Create a header for each category
        const categoryHeader = document.createElement("h4");
        categoryHeader.textContent = category.title;
        projectsDiv.appendChild(categoryHeader);

        // Create a container for the items in this category
        let itemContainer = document.createElement("div");
        itemContainer.className = "container";

        // Iterate over each item in the category
        category.items.forEach((item, index) => {
            const projectElement = createProjectElement(item.link, item.name, item.description);
            itemContainer.appendChild(projectElement);

            // Check if the current index is odd (every 2 projects)
            if ((index + 1) % 2 === 0) {
                // Append the current container to the projects div
                projectsDiv.appendChild(itemContainer);
                // Add a line break after the container
                projectsDiv.appendChild(document.createElement("br"));
                // Create a new container for the next pair of projects
                itemContainer = document.createElement("div");
                itemContainer.className = "container";
            }
        });

        // Append any remaining projects in the last container
        if (itemContainer.children.length > 0) {
            projectsDiv.appendChild(itemContainer);
            projectsDiv.appendChild(document.createElement("br")); // Add a line break after the last container
        }

        // Add an <hr> tag after the pinned section
        if (categoryIndex === 0) {
            projectsDiv.appendChild(document.createElement("hr"));
        }
    });
}

// Helper function to create a project element
function createProjectElement(href, title, description) {
    const field = document.createElement("div");
    field.className = "fullfieldcompact";

    const projectTitle = document.createElement("h3");
    const projectLink = document.createElement("a");
    projectLink.href = href;
    projectLink.textContent = title;
    projectTitle.appendChild(projectLink);

    const projectDescription = document.createElement("p");
    projectDescription.textContent = description;

    field.appendChild(projectTitle);
    field.appendChild(projectDescription);

    return field;
}

// Call the function to create and display projects when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", createProjects);
