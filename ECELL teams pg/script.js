// Sample data for team members
const teamMembers = [
    {
        name: "John Doe",
        role: "Team Leader",
        image: "https://via.placeholder.com/100",
        bio: "John is the leader of the team, bringing over 10 years of experience in project management."
    },
    {
        name: "Jane Smith",
        role: "Developer",
        image: "https://via.placeholder.com/100",
        bio: "Jane is a skilled full-stack developer who specializes in JavaScript and Python."
    },
    {
        name: "Mike Johnson",
        role: "Designer",
        image: "https://via.placeholder.com/100",
        bio: "Mike is a creative designer with a passion for creating visually stunning web applications."
    }
];

// Function to create team member card
function createTeamMemberCard(member) {
    return `
        <div class="team-member">
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
            <p>${member.bio}</p>
        </div>
    `;
}

// Function to display the team members
function displayTeamMembers() {
    const teamSection = document.getElementById('team-section');
    teamSection.innerHTML = teamMembers.map(createTeamMemberCard).join('');
    animateOnScroll(); // Add the scroll animation after loading members
}

// Intersection Observer to animate on scroll
function animateOnScroll() {
    const teamMembers = document.querySelectorAll('.team-member');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    teamMembers.forEach(member => {
        observer.observe(member);
    });
}

// Call the function to display team members on page load
window.onload = displayTeamMembers;
