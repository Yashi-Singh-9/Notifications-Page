document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const markAllReadButton = document.getElementById("markAllRead");
    const notificationsList = document.getElementById("notificationsList");
    const unreadCountElement = document.querySelector(".header .number");
    const unreadNotifications = document.querySelectorAll(".notification.unread");
  
    // Update unread count
    const updateUnreadCount = () => {
      const unreadCount = document.querySelectorAll(".notification.unread").length;
      unreadCountElement.textContent = unreadCount;
  
      if (unreadCount === 0) {
        unreadCountElement.style.display = "none"; // Hide the unread count if 0
      } else {
        unreadCountElement.style.display = "inline-block";
      }
    };
  
    // Mark all as read functionality
    markAllReadButton.addEventListener("click", () => {
      unreadNotifications.forEach((notification) => {
        notification.classList.remove("unread");
        // Hide the red dot icon
        const icon = notification.querySelector("i.fa-circle");
        if (icon) {
          icon.style.display = "none";
        }
      });
      updateUnreadCount();
    });
  
    // Add click interaction for individual notifications
    notificationsList.addEventListener("click", (event) => {
      const notification = event.target.closest(".notification.unread");
      if (notification) {
        notification.classList.remove("unread");
        // Hide the red dot icon
        const icon = notification.querySelector("i.fa-circle");
        if (icon) {
          icon.style.display = "none";
        }
        updateUnreadCount();
      }
    });
  
    // Initialize unread count on page load
    updateUnreadCount();
  });
  