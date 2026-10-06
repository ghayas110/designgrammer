// Oracle course catalog shared by the course pages, dashboard, cart and admin views.
// Every lesson is a public YouTube video (videoId) credited to the channel that published it.

export const ORACLE_CERTIFICATIONS = [
  {
    id: "sql-associate",
    name: "Oracle Database SQL Certified Associate",
    exam: "1Z0-071",
    level: "Associate",
    summary:
      "Validates your ability to query, filter, join and aggregate data and to create and manage schema objects with Oracle SQL.",
    courseId: 1,
  },
  {
    id: "plsql-professional",
    name: "Oracle Database PL/SQL Developer Certified Professional",
    exam: "1Z0-149",
    level: "Professional",
    summary:
      "Covers PL/SQL blocks, variables, cursors, exception handling, functions, procedures and packages.",
    courseId: 2,
  },
  {
    id: "dba-administration-1",
    name: "Oracle Database Administration I",
    exam: "1Z0-082",
    level: "Professional",
    summary:
      "The first of two exams toward the Oracle Database Administration Certified Professional credential: architecture, storage, users, networking and backups.",
    courseId: 3,
  },
  {
    id: "oci-foundations",
    name: "Oracle Cloud Infrastructure 2026 Foundations Associate",
    exam: "1Z0-1085-26",
    level: "Foundations",
    summary:
      "An entry-level cloud exam covering regions and availability domains, compute, networking, storage, IAM and OCI pricing.",
    courseId: 4,
  },
  {
    id: "apex-developer",
    name: "Oracle APEX Cloud Developer Professional",
    exam: "1Z0-771",
    level: "Professional",
    summary:
      "Validates hands-on skills designing, building and deploying low-code Oracle APEX applications, reports and forms.",
    courseId: 5,
  },
  {
    id: "autonomous-professional",
    name: "Oracle Autonomous AI Database Professional",
    exam: "1Z0-931-26",
    level: "Professional",
    summary:
      "Covers provisioning, scaling, securing and monitoring Oracle Autonomous Database, plus Select AI and AI Vector Search.",
    courseId: 6,
  },
];

export const COURSES = [
  {
    id: 1,
    title: "Oracle SQL Fundamentals: Query Oracle Database Like a Pro",
    description:
      "Learn Oracle SQL from scratch: practice in Oracle Live SQL, create tables, write queries, join tables, group results and use subqueries.",
    category: "oracle-database",
    topic: "sql",
    instructor: "Caleb Curry & Database Star",
    rating: 4.7,
    reviews: 18432,
    students: 64210,
    level: "Beginner",
    price: 19.99,
    originalPrice: 99.99,
    badge: "Bestseller",
    certificationId: "sql-associate",
    learn: [
      "Understand how Oracle Database stores and organizes data",
      "Practice SQL for free in the browser with Oracle Live SQL",
      "Create tables and write SELECT queries with filters and sorting",
      "Combine tables with joins, GROUP BY and subqueries",
    ],
    requirements: ["No prior database experience is needed.", "A free Oracle Live SQL account for practice."],
    sections: [
      {
        title: "Getting Started with Oracle",
        lessons: [
          { title: "Intro to Oracle Database", videoId: "QHYuuXPdQNM", duration: "10:18", channel: "Caleb Curry" },
          { title: "Practicing with Oracle Live SQL", videoId: "j85zjtXF4to", duration: "12:29", channel: "Database Star" },
          { title: "Intro to Queries", videoId: "zb5m336tbUM", duration: "4:55", channel: "Caleb Curry" },
          { title: "CREATE TABLE", videoId: "dY6fCzQ8AjE", duration: "5:04", channel: "Caleb Curry" },
        ],
      },
      {
        title: "Joins, Grouping and Subqueries",
        lessons: [
          { title: "SQL Joins: A Guide and Examples", videoId: "UfgRTbRN9FM", duration: "11:38", channel: "Database Star" },
          { title: "GROUP BY Explained", videoId: "x2_mOJ3skSc", duration: "5:05", channel: "Database Star" },
          { title: "When to Use a Subquery", videoId: "tlvxb7UduJw", duration: "8:50", channel: "Database Star" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Oracle PL/SQL Programming: From Blocks to Stored Procedures",
    description:
      "Write procedural code inside Oracle Database with PL/SQL: variables, SELECT INTO, cursors, functions, stored procedures and exception handling.",
    category: "oracle-database",
    topic: "plsql",
    instructor: "Manish Sharma",
    rating: 4.6,
    reviews: 9874,
    students: 31502,
    level: "Intermediate",
    price: 22.99,
    originalPrice: 109.99,
    badge: null,
    certificationId: "plsql-professional",
    learn: [
      "Structure anonymous and named PL/SQL blocks",
      "Declare variables, constants and anchored (%TYPE) datatypes",
      "Process query results with cursors",
      "Build functions and stored procedures with proper exception handling",
    ],
    requirements: ["Basic Oracle SQL (SELECT, INSERT, UPDATE).", "Access to an Oracle Database or Oracle Live SQL."],
    sections: [
      {
        title: "PL/SQL Basics",
        lessons: [
          { title: "PL/SQL Block Types", videoId: "rbarR4_gaH8", duration: "2:47", channel: "Manish Sharma" },
          { title: "PL/SQL Variables", videoId: "2MNmodawvnE", duration: "5:37", channel: "Manish Sharma" },
          { title: "SELECT INTO Statement", videoId: "F5eMJhwmCQs", duration: "5:22", channel: "Manish Sharma" },
          { title: "Anchored Datatype (%TYPE)", videoId: "Zt0vlmTqhP4", duration: "6:10", channel: "Manish Sharma" },
        ],
      },
      {
        title: "Cursors, Subprograms and Exceptions",
        lessons: [
          { title: "Introduction to Cursors", videoId: "_snAMqCBitg", duration: "5:10", channel: "Manish Sharma" },
          { title: "PL/SQL Functions", videoId: "6OJIrPx61mU", duration: "5:10", channel: "Manish Sharma" },
          { title: "Stored Procedures", videoId: "buaSuEMi4lw", duration: "4:59", channel: "Manish Sharma" },
          { title: "Exception Handling", videoId: "jBzhLOCBuuA", duration: "3:41", channel: "Manish Sharma" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Oracle Database Administration (19c): Install, Manage and Back Up",
    description:
      "Learn the core DBA skills: Oracle architecture, installing 19c on Linux, listener networking, tablespaces, users and privileges, and RMAN backups.",
    category: "oracle-database",
    topic: "dba",
    instructor: "Oracle DBA community instructors",
    rating: 4.5,
    reviews: 6120,
    students: 18744,
    level: "Intermediate",
    price: 24.99,
    originalPrice: 129.99,
    badge: "Updated Recently",
    certificationId: "dba-administration-1",
    learn: [
      "Explain the Oracle instance, memory structures and background processes",
      "Install Oracle Database 19c on Oracle Linux",
      "Configure the listener and manage tablespaces",
      "Create users, grant privileges and back up the database with RMAN",
    ],
    requirements: ["Comfort with SQL and basic Linux commands.", "A virtual machine if you want to follow the installation."],
    sections: [
      {
        title: "Architecture and Installation",
        lessons: [
          { title: "Oracle Database Server Architecture", videoId: "f3RJd7nBlts", duration: "17:15", channel: "Vismo Technologies" },
          { title: "Installing Oracle Database 19c on Linux", videoId: "LWxhTu1hYc0", duration: "12:29", channel: "r2schools" },
          { title: "Introduction to the Oracle Listener", videoId: "hoUeYgptyB4", duration: "16:41", channel: "DBA Genesis" },
        ],
      },
      {
        title: "Storage, Security and Backup",
        lessons: [
          { title: "Introduction to Tablespaces", videoId: "5i5RtUdxaHY", duration: "4:26", channel: "Manish Sharma" },
          { title: "Types of Tablespaces", videoId: "VH0hE1WRoTI", duration: "8:22", channel: "Ramkumar Swaminathan" },
          { title: "Users, GRANT and REVOKE in 19c", videoId: "ogvpUqeXZdI", duration: "7:01", channel: "E-Learning" },
          { title: "What is Recovery Manager (RMAN)?", videoId: "UDzD7aZTQ2E", duration: "3:45", channel: "Manish Sharma" },
          { title: "RMAN Backup and Restore", videoId: "XEv5oWK1IuA", duration: "27:58", channel: "Database Guy" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Oracle Cloud Infrastructure (OCI) Foundations",
    description:
      "Get started with Oracle Cloud: free tier, regions and availability domains, IAM, virtual cloud networks, compute and object storage.",
    category: "oracle-cloud",
    topic: "oci",
    instructor: "Oracle Learning",
    rating: 4.6,
    reviews: 7310,
    students: 25987,
    level: "Beginner",
    price: 17.99,
    originalPrice: 89.99,
    badge: "Bestseller",
    certificationId: "oci-foundations",
    learn: [
      "Describe OCI regions, availability domains and fault domains",
      "Set up an Oracle Cloud Free Tier account",
      "Control access with Identity and Access Management",
      "Create a virtual cloud network, compute instances and object storage",
    ],
    requirements: ["No cloud experience required.", "An email address to create an Oracle Cloud Free Tier account."],
    sections: [
      {
        title: "Getting Started with OCI",
        lessons: [
          { title: "What is Oracle Cloud Infrastructure?", videoId: "I2oQuBRNiHs", duration: "2:16", channel: "Oracle" },
          { title: "Getting Started with Oracle Cloud Free Tier", videoId: "YnsN52hB8EY", duration: "3:37", channel: "Oracle Developers" },
          { title: "Regions and Availability Domains", videoId: "vDlI7cwSWhg", duration: "9:23", channel: "Oracle Learning" },
          { title: "Identity and Access Management Overview", videoId: "Op5TLTBBABI", duration: "2:17", channel: "Oracle Learning" },
        ],
      },
      {
        title: "Core Services",
        lessons: [
          { title: "OCI Networking Overview", videoId: "DIjGGhidUrI", duration: "3:38", channel: "Oracle Learning" },
          { title: "Create a Virtual Cloud Network", videoId: "DICo2-eRPC4", duration: "9:03", channel: "Oracle Learning" },
          { title: "Introduction to OCI Compute", videoId: "ZryYNrxxZ48", duration: "7:01", channel: "Oracle Learning" },
          { title: "Introduction to OCI Object Storage", videoId: "OOuztXh5bd0", duration: "14:24", channel: "Oracle Learning" },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Oracle APEX: Build Low-Code Web Apps on Oracle Database",
    description:
      "Build data-driven web apps with Oracle APEX: the App Builder, interactive reports, forms and the APEX AI Assistant.",
    category: "oracle-development",
    topic: "apex",
    instructor: "Oracle APEX",
    rating: 4.7,
    reviews: 4215,
    students: 13960,
    level: "Beginner",
    price: 19.99,
    originalPrice: 94.99,
    badge: null,
    certificationId: "apex-developer",
    learn: [
      "Understand what Oracle APEX is and where it fits",
      "Create an application with the App Builder",
      "Present data with interactive reports",
      "Build forms and generate apps with the APEX AI Assistant",
    ],
    requirements: ["Basic SQL knowledge.", "A free Oracle APEX workspace (apex.oracle.com)."],
    sections: [
      {
        title: "Getting Started with APEX",
        lessons: [
          { title: "What is Oracle APEX?", videoId: "klm8M4e5fEM", duration: "1:41", channel: "Oracle APEX" },
          { title: "Oracle APEX Overview", videoId: "zjSRMDZV1lQ", duration: "10:56", channel: "Oracle" },
          { title: "Complete Introduction for Beginners", videoId: "Q-7aqhq-xAE", duration: "3:11", channel: "Oracle APEX Tutorials" },
        ],
      },
      {
        title: "Reports, Forms and AI",
        lessons: [
          { title: "Intro to Interactive Reports", videoId: "_iRof5et0JA", duration: "4:32", channel: "Oracle APEX" },
          { title: "Forms in APEX", videoId: "BpZUw31lXCo", duration: "4:31", channel: "Oracle APEX" },
          { title: "Build an App with the APEX AI Assistant", videoId: "YsViwVKC2ow", duration: "1:40", channel: "Oracle" },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Oracle Autonomous Database and 23ai AI Vector Search",
    description:
      "Discover Oracle's self-driving database and the AI features in Oracle Database 23ai, including vector search over your business data.",
    category: "oracle-cloud",
    topic: "autonomous",
    instructor: "Oracle",
    rating: 4.5,
    reviews: 2987,
    students: 9845,
    level: "All Levels",
    price: 21.99,
    originalPrice: 119.99,
    badge: "New",
    certificationId: "autonomous-professional",
    learn: [
      "Explain what makes a database autonomous",
      "Provision and connect to Oracle Autonomous Database",
      "Choose between Autonomous Transaction Processing and Data Warehouse",
      "Use AI Vector Search in Oracle Database 23ai",
    ],
    requirements: ["Basic SQL knowledge.", "An Oracle Cloud Free Tier account for hands-on practice."],
    sections: [
      {
        title: "Oracle Autonomous Database",
        lessons: [
          { title: "What Is an Autonomous Database?", videoId: "ZtK4_0ZEfTY", duration: "0:36", channel: "Oracle" },
          { title: "How Autonomous Database Works", videoId: "c-DUIePFKco", duration: "11:01", channel: "Oracle" },
          { title: "Get Started with Autonomous Database", videoId: "jm94LaV1oTw", duration: "3:56", channel: "Oracle Learning" },
          { title: "ATP vs ADW", videoId: "rdCB7n8oUzk", duration: "4:35", channel: "Cloud Alchemy Academy" },
        ],
      },
      {
        title: "AI in Oracle Database 23ai",
        lessons: [
          { title: "Oracle Database 23ai: AI Made Simple", videoId: "TRDDsStoMxc", duration: "7:12", channel: "Oracle" },
          { title: "What Is a Vector Database?", videoId: "ebMkbWzFCnA", duration: "2:59", channel: "Oracle" },
          { title: "Vector Search: Bring AI to Your Data", videoId: "pu79sny1AzY", duration: "2:44", channel: "Oracle Database Product Management" },
          { title: "Vector Search in 23ai: Demo", videoId: "eyCnDd8b7xc", duration: "3:39", channel: "Oracle" },
        ],
      },
    ],
  },
];

export const COURSE_CATEGORIES = [
  {
    id: "oracle-database",
    label: "Oracle Database",
    topics: [
      { id: "sql", label: "Oracle SQL", learners: "64K+" },
      { id: "plsql", label: "PL/SQL", learners: "31K+" },
      { id: "dba", label: "Database Administration", learners: "18K+" },
    ],
  },
  {
    id: "oracle-cloud",
    label: "Oracle Cloud",
    topics: [
      { id: "oci", label: "OCI Foundations", learners: "25K+" },
      { id: "autonomous", label: "Autonomous Database & AI", learners: "9K+" },
    ],
  },
  {
    id: "oracle-development",
    label: "Low-Code Development",
    topics: [{ id: "apex", label: "Oracle APEX", learners: "13K+" }],
  },
];

export const getCourse = (id) => COURSES.find((course) => course.id === Number(id));

export const getCertification = (course) =>
  ORACLE_CERTIFICATIONS.find((cert) => cert.id === course.certificationId);

export const getLessons = (course) => course.sections.flatMap((section) => section.lessons);

export const getThumbnail = (videoId) => `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

export const getCourseImage = (course) => getThumbnail(course.sections[0].lessons[0].videoId);

const toSeconds = (duration) =>
  duration.split(":").reduce((total, part) => total * 60 + Number(part), 0);

export const formatTotalDuration = (lessons) => {
  const minutes = Math.round(lessons.reduce((total, l) => total + toSeconds(l.duration), 0) / 60);
  return minutes >= 60 ? `${Math.floor(minutes / 60)} hr ${minutes % 60} min` : `${minutes} min`;
};

export const getCourseStats = (course) => {
  const lessons = getLessons(course);
  return { lectures: lessons.length, duration: formatTotalDuration(lessons) };
};

export const getChannels = (course) => [...new Set(getLessons(course).map((l) => l.channel))];
