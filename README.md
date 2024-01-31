## Next-Salon

A website based on a client project, built using Next.js and Contentful CMS. 

### Features
- Responsive menus.
- Customizable homepage with dynamic content using Contentful CMS
- Gallery page to showcase hairstyles with custom built lightbox.
- Contact page
- A working contact form via Sendgrid for easy communication with the company.
- Services page displaying all the services offered by the salon.
- Price list page with responsive tables displaying all the prices for each service offered.
- Testimonial carousel using Splide.js for showcasing customer's feedback.
- Phosphor icons for a visually appealing and consistent design throughout the website.
- Fully responsive.

### Getting Started

To run this website locally, you will need to have Node.js and npm installed. 

1. Clone the repository to your local machine

```
git clone https://github.com/jakewlv/next-salon.git
```

2. Install the dependencies

```
npm install
```

3. Create a .env file in the root of the project and add the following environment variables:

```
CONTENTFUL_SPACE_ID=your_contentful_space_id
CONTENTFUL_ACCESS_TOKEN=your_contentful_access_token
SENDGRID_API_KEY=your_sendgrid_api_key
```

4. Start the development server

```
npm run dev
```

The website will be running on http://localhost:3000


### Adding content to the website

1. Log in to your Contentful account and create a new space for your website.

2. Create content models for all the different types of content you want to add to your website. Examples of content models for this website could include: Homepage, Services, Price List, Testimonials, etc.

3. Add the relevant fields to each content model, such as a title, image, description, etc.

4. Create content entries for each content model.

4. Use the Contentful SDK in your Next.js application to fetch the content and display it on the website.

### Example Code

Use the Contentful SDK in your Next.js application to fetch content from Contentful and display it on the website:

```javascript
import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

const Homepage = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.heroImage.fields.file.url} alt={props.heroImage.fields.title}/>
      <p>{props.description}</p>
    </div>
  )
}

export async function getStaticProps() {
  const homepage = await client.getEntry('homepage')
  const props = {
    title: homepage.fields.title,
    heroImage: homepage.fields.heroImage,
    description: homepage.fields.description
  }
  return { props }
}

export default Homepage

```

This example is showing how to get the data of the homepage, but in the same way, you can get any other data from your contentful space.

In the example code, getStaticProps is an Next.js function that allows you to fetch data at build time, and the data is then passed as props to the component. This allows you to use Contentful to manage your content and Next.js to manage the rendering of your pages.

You will also need to import createClient from contentful package and initialize it with your spaceId and accessToken. Then use the client to get the entry by id or entry

Note that in this example, the environment variables for your Contentful space ID and access token are being accessed from a .env file, which is a common way to manage environment variables in Next.js applications.

### Deployment

This website is ready to be deployed to any platform that supports Node.js.

### Built With

- [Next.js](https://nextjs.org/) - React framework for building server-rendered applications
- [Contentful](https://www.contentful.com/) - Headless CMS for managing content
- [Sendgrid](https://sendgrid.com/) - Email delivery platform for sending form submissions
- [Phosphor](https://phosphoricons.com/) - SVG icons.
- [Splide.js](https://splidejs.com/) - Lightweight, flexible and accessible slider/carousel.

### Author

[Jake Mcilvenna/jakewlv] (https://github.com/jakewlv)

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
