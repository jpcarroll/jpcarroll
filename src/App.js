import React from 'react';
import './App.css';
import { Layout, PageHeader, Typography, Button, List, Collapse, Icon, Tooltip } from 'antd';

const { Panel } = Collapse;
const { Content } = Layout;
const { Paragraph } = Typography;

const aboutMe = (
  <div className="content">
    <Paragraph>
      Senior honors student at Clemson University studying computer science and economics. 
      My fascination for technology is what drew me into computer science in the first place, 
      and because it is such a dynamic field encourages me to continue learning something new every day.
      I will be graduating from Clemson in December of 2020, and will be applying to doctoral programs in computer science.
      My current research interests are in artificial intelligence, theoretical computer science and human-centered computing.
    </Paragraph>

    <Paragraph>
      When I am not hunched over my computer, you can usually find me outdoors, hanging with friends or with my beautiful girlfriend.
      I love to climb, play frisbee, go hiking, biking and geocaching. 
      <br></br>
      <br></br>
      I am actively looking for an internship position for the Spring and Summer of 2021 in software engineering, machine learning,
      AI, data science, or research. Below you can find my resume, curriculum vitae, as well as LinkedIn, Github, and Google Scholar.
      If you would like to contact me, you can email me at <a href="mailto:jpcarrrolll@gmail.com">jpcarrrolll@gmail.com.</a>
      <br></br>
      <br></br>
      Thank you for visiting my website. Please do not hesitate to get in touch!
    </Paragraph>
  </div>
);

const aboutTitle = (
  <h1 style={{ marginLeft: '0.8em', marginTop: '1em' }}>About Me</h1>
);

const coursesContent = {
  alg: 
      <ul type="square">
        <li>Design and Analysis of Algorithms</li>
        <li>Algorithms and Data Structures</li>
      </ul>,
  dev: 
      <ul type="square">
        <li>Cloud Computing Architecture</li>
        <li>Software Engineering</li>
        <li>Tech Writing</li>
      </ul>,
  other: 
      <ul type="square">
        <li>Linear Algebra</li>
        <li>Network Programming</li>
        <li>Operating Systems</li>
        <li>Programming Systems</li>
      </ul>
};

const eduTitle = (
  <h1 style={{ marginLeft: '0.8em', marginTop: '1em' }}>Education</h1>
);

const eduData = (
  <div style={{ fontSize: '1.5em' }} className="content">
    <h3>Clemson University Calhoun Honors College</h3>
    <h4>August 2017 - December 2020 (Anticipated)</h4>
    <Paragraph>
      I am pursuing a Bachelor of Science (B.S) in Computer Science with a minor in Economics.
    </Paragraph>
    <h4>Coursework:</h4>
    <Collapse accordion style={{ width: '43vw', minWidth: '300px' }}>
      <Panel header="Algorithms" key="1">
        {coursesContent.alg}
      </Panel>
      <Panel header="Software Engineering" key="2">
        {coursesContent.dev}
      </Panel>
      <Panel header="Other Courses" key="3">
        {coursesContent.other}
      </Panel>
    </Collapse>
  </div>
);

const expTitle = (
  <h1 style={{ marginLeft: '0.8em', marginTop: '1em' }}>Experience</h1>
);

const expData = {
  barclays: 
          <div style={{ fontSize: '1.5em' }} className="content">
            <h3>Barclays</h3>
            <h4>Incoming Summer Technology Analyst</h4>
            <Paragraph>
              Incoming Summer Technology Analyst for Summer of 2020 at their Whippany, NJ office.
            </Paragraph>
          </div>,
  clemson:
          <div style={{ fontSize: '1.5em' }} className="content">
            <h3>Clemson University</h3>
            <h4>Teaching Assistant, Research Assistant, Resident Assistant</h4>
            <Paragraph>
              I have been a teaching assistant for the past two years for Intro to Computer Programming I, 
              Algorithms and Data Structures, and Top Rope Climbing. I am also currently a research assistant 
              for Team Research Analytics in Computational Environments (TRACE) Lab. In 2018, I was a resident 
              assistant for a freshman engineering community.
            </Paragraph>
          </div>,
  eleos: 
        <div style={{ fontSize: '1.5em' }} className="content">
          <h3>Eleos Technologies</h3>
          <h4>Software Quality Assurance Tester</h4>
          <Paragraph>
            Operates under a scrum framework to complete manual software testing for their mobile applications and cloud software.
          </Paragraph>
        </div>,
  blackbaud: 
          <div style={{ fontSize: '1.5em' }} className="content">
            <h3>Blackbaud</h3>
            <h4>Salesforce DevOps Intern</h4>
            <Paragraph>
              During the summer of 2019, I was a software engineering intern at Blackbaud where I designed an access broker which
              allowed customers with old credentials to access new product releases.
            </Paragraph>
          </div>
};

const projectsTitle = (
  <h1 style={{ marginLeft: '0.8em', marginTop: '1em' }}>Projects</h1>
);

const projectsData = {
  capstone:
          <div style={{ fontSize: '1.5em' }} className="content">
            <h3>Data Science: Clemson Senior Capstone</h3>
            <h4>January 2020 - May 2020</h4>
            <Paragraph>
              Throughout the spring semester of 2020, I worked with Clemson University's Center for Workforce Development on 
              a senior design capstone project. The capstone class is an opportunity for students to work on a real-world project 
              with a sponsoring company. Our team of four worked with CUCWD to create a standalone platform that analyzes millions of data points
              from their system and give valuable insights to employees and course instructors on ways to improve the system.
            </Paragraph>
          </div>,
  website:
          <div style={{ fontSize: '1.5em' }} className="content">
            <h3>This Website</h3>
            <h4>January 2020</h4>
            <Paragraph>
              This website was built using React with Ant Design components and styling. Feel free to check out the source code below!
            </Paragraph>
            <Button type="primary" icon="link" size='default' href="https://github.com/jpcarroll/jpcarroll">Github Source</Button>
          </div>,
  trainar: 
          <div style={{ fontSize: '1.5em' }} className="content">
            <h3>CUhackit TrainAR</h3>
            <h4>January 2019</h4>
            <Paragraph>
              Getting started with a workout routine can be both challenging and daunting. With so many exercises 
              and so many things to consider regarding form, the thought of it alone can be very demotivating. 
              That's why in CUhackit 2019, we created an app that integrated with sensors to indicate if the user 
              is performing exercises with proper form.
              <br></br>
              <br></br>
              Our solution was an augmented reality app that worked together with an Inertial Measurement Unit connected to an Arduino 101. 
              Our prototyping exercise was push-ups, so the AR app built in Unity with ARCore would place hand markings on the floor to 
              indicate the starting position. The sensors on the chest and lower back would then calculate if the upper body maintained a 
              proper correct angle during the rep.
              <br></br>
              <br></br>
              This idea introduced opportunity for future work in this area, such as integrating optical sensors with augmented reality to 
              support many exercises and full workout routines.
            </Paragraph>
            <Button type="primary" icon="link" size='default' href="https://devpost.com/software/tech-trainer">Devpost</Button>
          </div>,
  bpa: 
          <div style={{ fontSize: '1.5em' }} className="content">
            <h3>AWS Cloud-a-thon BPA</h3>
            <h4>April 2018</h4>
            <Paragraph>
              People with visual impairments can use technology in remarkable ways. For the Clemson 12-hour AWS Cloud-a-thon, we wanted to create a tool 
              that those with these visual impairments can use to identify just about anything in front of them.
              <br></br>
              <br></br>
              Our idea for this solution was to create an app with the simplest UI imaginable: one button. The press of this button would then trigger a 
              reading of everything that the phone camera sees. This idea was realized by creating a React Native mobile app that integrated with Amazon Web 
              Services solutions that interpreted a photo from the camera and converted results to text-to-speech. This text-to-speech identified 
              everything from objects, OCR text, faces, and expressions, with each category read separately.
              <br></br>
              <br></br>
              Our app earned 2nd place during this cloud-a-thon.
            </Paragraph>
            <Button type="primary" icon="link" size='default' href="https://github.com/jackcmac/aws-cloudathon">Github Source</Button>
          </div>,
  scribble: 
        <div style={{ fontSize: '1.5em' }} className="content">
          <h3>CUHackit Scribble</h3>
          <h4>March 2018</h4>
          <Paragraph>
          Many students enjoy the learning benefits of handwriting notes during class but have to give up the organization 
          and searchability of digital notes. That's why for CUhackit 2018, we created Scribble.
          <br></br>
          <br></br>
          The idea for Scribble was simple: create an OCR solution custom-tailored to the application of handwritten notes. 
          Scanning had to be fast and easy and the output should be able to be searched and marked up. Our solution was a React app that 
          integrated with AWS Rekognition to scan images for text and return a document with all of the text in a searchable, editable format.
          </Paragraph>
          <Button style={{ marginRight: '0.5em' }} type="primary" icon="link" size='default' href="https://github.com/jackcmac/cuhackit-2018-react-app">Github Source</Button>
          <Button type="primary" icon="link" size='default' href="https://devpost.com/software/scribble-6rjwzp">Devpost</Button>
        </div>,
  hsthesis: 
          <div style={{ fontSize: '1.5em' }} className="content">
            <h3>High School Senior Thesis</h3>
            <h4>Minecraft Economics: A Study of Wealth Inequality in a Virtual World</h4>
            <h4>January 2016 - December 2016</h4>
            <Paragraph>
              During my junior and senior years of high school, I had the incredible opportunity to find a mentor, research, and write about a topic relevant to my interests. 
              For my Senior Thesis project, I studied inequality in Minecraft economy servers and discussed implications of my research in the real world.
              <br></br>
              <br></br>
              After researching related work and completing my own study, I defended the project to my advisor, mentor, and third parties. Check out the final paper below!
            </Paragraph>
            <Button type="primary" icon="link" size='default' href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3185048">Paper</Button>
          </div>
};

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Jack Carroll</h1>
        <h3>Software Engineer and Researcher</h3>
      </header>
      <PageHeader title={aboutTitle} style={{ backgroundColor: 'black', fontSize: '1.5em' }}>
        <Content style={{ marginLeft: '1.5em', marginBottom: '1em' }}>
          {aboutMe}
          <Button style={{ marginRight: '0.5em' }} href="https://jpcarroll.dev/jpc-resume.pdf" target="_blank" type="primary" icon="download" size='default'> Resume </Button>
          <Tooltip placement="bottom" title="Whoops, I don't have this yet :(">
            <Button type="primary" icon="download" size='default'>Curriculum Vitae</Button>
          </Tooltip>
        </Content>
      </PageHeader>
      <PageHeader title={eduTitle}>
        <Content style={{ marginLeft: '2.2em' }}>
          <List itemLayout="vertical" size="large">
            <List.Item extra={ <img width={200} height={130} alt="education" src="https://images.abccolumbia.com/wp-content/uploads/2015/10/cupaw.jpg"/>}>
              {eduData}
            </List.Item>
          </List>
        </Content>
      </PageHeader>
      <PageHeader title={expTitle} style={{ backgroundColor: 'black', fontSize: '1.5em' }}>
        <Content style={{ marginLeft: '2.2em' }}>
          <List itemLayout="vertical" size="large">
              <List.Item extra={ <img width={200} height={130} alt="projects" src="https://cdn.images.express.co.uk/img/dynamic/59/750x445/1025730.jpg"/>}>
                {expData.barclays}
              </List.Item>
              <List.Item extra={ <img width={200} height={130} alt="projects" src="https://images.abccolumbia.com/wp-content/uploads/2015/10/cupaw.jpg"/>}>
                {expData.clemson}
              </List.Item>
              <List.Item extra={ <img width={200} height={130} alt="projects" src="https://pbs.twimg.com/profile_images/1510763848/elios-logo_400x400.jpg"/>}>
                {expData.eleos}
              </List.Item>
              <List.Item extra={ <img width={200} height={130} alt="projects" src="https://yt3.ggpht.com/a/AGF-l79wlQ1yUUOeQJo60FoAY0eYri_3W3f2-P14BA=s900-c-k-c0xffffffff-no-rj-mo"/>}>
                {expData.blackbaud}
              </List.Item>
          </List>
        </Content>
      </PageHeader>
      <PageHeader title={projectsTitle}>
      <Content style={{ marginLeft: '2.2em' }}>
        <List itemLayout="vertical" size="large">
            <List.Item extra={ <img width={200} height={130} alt="experience" src="https://pbs.twimg.com/profile_images/715563520805498880/VM1FJAJ3_400x400.jpg"/>}>
              {projectsData.capstone}
            </List.Item>
            <List.Item extra={ <img width={200} height={130} alt="experience" src="https://create-react-app.dev/img/logo-og.png"/>}>
              {projectsData.website}
            </List.Item>
            <List.Item extra={ <img width={200} height={130} alt="experience" src="https://localist-images.azureedge.net/photos/610110/huge/36508146e3266908e0cf7923d996b6cb2d8ef307.jpg"/>}>
              {projectsData.trainar}
            </List.Item>
            <List.Item extra={ <img width={200} height={130} alt="experience" src="https://www.groupwaretech.com/wp-content/uploads/2019/07/gwt-cloud-awslogo2-300x249.jpg"/>}>
              {projectsData.bpa}
            </List.Item>
            <List.Item extra={ <img width={200} height={130} alt="experience" src="https://localist-images.azureedge.net/photos/610110/huge/36508146e3266908e0cf7923d996b6cb2d8ef307.jpg"/>}>
              {projectsData.scribble}
            </List.Item>
            <List.Item extra={ <img width={200} height={130} alt="experience" src="https://hostingvictory.com/wp-content/uploads/2019/12/minecraft-6.png"/>}>
              {projectsData.hsthesis} 
            </List.Item>
          </List>
        </Content>
      </PageHeader>
      <footer className="footer">
        <Button style={{ marginRight: '0.5em', fontSize: '0.8em' }} href="https://github.com/jpcarroll"><Icon type="github" theme="filled"/>Github</Button>
        <Button style={{ marginRight: '0.5em', fontSize: '0.8em' }} href="https://www.linkedin.com/in/jp-carroll/"><Icon type="linkedin" theme="filled" />LinkedIn</Button>
        <Button style={{ fontSize: '0.8em' }} href="https://scholar.google.com/citations?user=QVV2LEEAAAAJ"><Icon type="google-square" theme="filled" />Scholar</Button>
      </footer>
    </div>
  );
}
export default App;
