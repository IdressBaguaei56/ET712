// Custom utilities module

/**
 * Formats a name by capitalizing the first letter and lowercase for the rest
 * @param {string} name - The name to format
 * @returns {string} - The formatted name
 */
function formatName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }
  
  /**
   * Generates a unique ID based on a number and current timestamp
   * @param {number} number - Base number for the ID
   * @returns {string} - A formatted ID string
   */
  function generateID(number) {
    return `ID-${number}-${Date.now().toString().slice(-4)}`;
  }
  
  /**
   * Validates an email address format
   * @param {string} email - The email to validate
   * @returns {boolean} - True if valid email format, false otherwise
   */
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  // Export the functions to make them available when this module is required
  module.exports = {
    formatName,
    generateID,
    validateEmail
  };