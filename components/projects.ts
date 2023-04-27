export const projects = [
    {
        id: 1,
        img: '/images/projects/setqr-ss.png',
        title: 'setQR',
        subtitle: 'web app used to generate custom QR codes',
        livelink: 'https://setqr.netlify.app',
        details: `Lorem ipsum dolor sit amet, consectetur
         adipiscing elit, sed do eiusmod tempor incididunt 
         ut labore et dolore magna aliqua. Ut enim ad minim 
         veniam, quis nostrud exercitation ullamco laboris 
         nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse
           cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui 
            officia deserunt mollit anim id est laborum.`
    },
    {
        id: 2,
        img: '/images/projects/taskguru-ss.png',
        title: 'TASKGURU',
        subtitle: 'web app used for managing your tasks',
        livelink: 'https://mytaskguru.netlify.app',
        details: `Lorem ipsum dolor sit amet, consectetur
         adipiscing elit, sed do eiusmod tempor incididunt 
         ut labore et dolore magna aliqua. Ut enim ad minim 
         veniam, quis nostrud exercitation ullamco laboris 
         nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse
           cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui 
            officia deserunt mollit anim id est laborum.`
    },
    {
        id: 3,
        img: '/images/projects/mutanos-ss.png',
        title: 'Mutanos',
        subtitle: 'landing page done for a restaurant',
        livelink: 'https://mutanos.netlify.app',
        details: `Lorem ipsum dolor sit amet, consectetur
         adipiscing elit, sed do eiusmod tempor incididunt 
         ut labore et dolore magna aliqua. Ut enim ad minim 
         veniam, quis nostrud exercitation ullamco laboris 
         nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse
           cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui 
            officia deserunt mollit anim id est laborum.

                            
            
            Lorem ipsum dolor sit amet, consectetur
         adipiscing elit, sed do eiusmod tempor incididunt 
         ut labore et dolore magna aliqua. Ut enim ad minim 
         veniam, quis nostrud exercitation ullamco laboris 
         nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse
           cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui 
            officia deserunt mollit anim id est laborum.`
    },
    {
        id: 4,
        img: '/images/projects/code.png',
        title: 'taskguru-api',
        subtitle:'API for taskguru',
        codeLink: 'https://github.com/pappitito/taskguru-API',
        details: `The task manager API has been developed to provide functionality
         for creating, updating, deleting, and marking tasks as completed. 
         It interacts with a database to store and retrieve task data for 
         individual users, and supports user authentication to ensure that 
         each user has access only to their own task data.

        The API has endpoints for each of these functions, allowing the client
         application to make HTTP requests to create, read, update, and delete
          task data for the currently authenticated user. For example, a POST
           request to the /tasks endpoint with a JSON payload creates a new task for the current user in the database, while a PUT request to the /tasks/{id} endpoint updates the name of an existing task belonging to the current user.
        
        Additionally, the API provides an endpoint for marking a task as
         completed, such as a PUT request to the /tasks/{id}/completed endpoint.
          This updates the completed status of the task belonging to the current
           user in the database.
        
        The API also has endpoints for retrieving task data for the current user,
         such as a GET request to the /tasks endpoint to retrieve a list of all
          tasks belonging to the current user, or a GET request to the
           /tasks/{id} endpoint to retrieve a specific task belonging to the
            current user by ID.
        
        Overall, the task manager API provides a flexible and scalable
         way to manage task data for individual users, allowing client
          applications to interact with the data through standardized HTTP
           requests and responses while maintaining secure user authentication.`,
    },
    {
        id: 5,
        img: '/images/projects/code.png',
        title: 'setQR-API',
        subtitle: 'backend powering the setQR web app',
        codeLink: 'https://github.com/pappitito/setQR-api',
        details: `An API (Application Programming Interface) for
         creating customized QR codes is a software interface that
          enables developers to integrate the functionality of generating
           QR codes into their applications or websites. This API allows 
           users to customize their QR codes by adding a logo, changing the
            color scheme, or altering the shape and size of the code to fit 
            their specific needs.

        Using this API, developers can easily generate high-quality QR
         codes that are designed to match their branding and marketing efforts.
          With the ability to customize the QR code's appearance, businesses can
           create codes that are more visually appealing and engaging for their
            customers, while still maintaining the functionality of a traditional
             QR code.
        
        The API can be easily integrated into a variety of applications, including
         mobile apps, websites, and e-commerce platforms, making it a versatile
          tool for businesses of all sizes. By using this API, businesses can
           enhance their marketing efforts and provide a more engaging and 
           interactive experience for their customers. 

           When developers sign up for an API that provides the functionality of creating
            customized QR codes, they are usually provided with an API key and ID. These 
            are unique identifiers that allow the API to verify the authenticity of the
             request being made. To make a QR code creation request, the developer must 
             provide their API key and ID in the query parameters of the API request. This 
             enables the API to authenticate the request and ensure that it is being made by
              an authorized user. By requiring an API key and ID for each request, 
              the API provider can monitor and control access to the API. 
              This helps to prevent unauthorized usage and ensures that only 
              approved requests are processed, protecting the integrity and 
              security of the service. Overall, the provision of an API key and ID
               is a standard security measure used by many APIs to authenticate requests and 
               ensure that only authorized users can access the service.
           
           `,
    },
    {
        id: 6,
        img: '/images/projects/wbt-ss.png',
        title: 'web trade journal',
        subtitle: 'online trading journal for traders',
        livelink: '',
        details: '',
    },
    {
        id: 7,
        img: '/images/projects/code.png',
        title: 'trade journal API',
        subtitle: 'backend powering the trade journal web app',
        codeLink: '',
        details: '',
    },
    {
        id: 8,
        img: '/images/projects/code.png',
        title: 'store filter API',
        subtitle: 'filtering store products on the backend',
        codeLink: '',
        details: '',
    },
    {
        id: 9,
        img: '/images/projects/code.png',
        title: 'Webscraper for online store',
        subtitle: `Web scraper built for an online store's flash sale.`,
        codeLink: 'https://github.com/pappitito/Web-scraper-for-online-store',
        details: `A web scraper is a program that automatically retrieves
         and extracts data from websites, making it easier for users to 
         access the information they need. The individual created a program 
         that would automatically search through Jumia's search results for 
         the iPhone 13, and notify them when the flash sale price was
          available. This would save the individual time and effort,
           as they would no longer have to manually search for the phone,
            and would be alerted as soon as the price was lowered.

        The timing of the flash sale was unknown, making
         it difficult to know when to search for the phone. To address 
         this issue, the program was designed to scrape the website 
         periodically until the price had been lowered and the phone was 
         found. Once the iPhone 13 with the desired flash sale price was 
         located, the program would send an email to the individual with 
         the page link, allowing them to easily make the purchase.
        
        Overall, the creation of the web scraper helped to automate the 
        search process, making it more efficient and convenient for the
         individual. By using technology to their advantage, they were 
         able to stay ahead of the competition and secure the iPhone 13 
         at the flash sale price, without having to spend time and energy 
         searching for it manually.`,
    },
    {
        id: 10,
        img: '/images/projects/code.png',
        title: 'breast cancer diagnosis',
        subtitle: 'Machine learning model for detecting breast cancer using tensorflow',
        codeLink: 'https://github.com/pappitito/breast-cancer-diagnosis',
        details: `Diagnosis for Malignant or Benign based on 30 different parameters`,
    },
    
]