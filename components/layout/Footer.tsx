import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white p-6 text-center mt-10">
          <p>&copy; {new Date().getFullYear()} Onebyte House. All rights reserved.</p>
        </footer>
      );
    };

export default Footer

