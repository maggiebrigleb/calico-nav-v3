const schoolConfig = {
  schoolName: "Ingram School of Engineering", 

  mainNav: [
    { 
      label: "About the School", 
      children: [
        {
          label: "Industrial Advisory Board", 
          children: [
            { label: "Civil Engineering Industrial Advisory Board (CE IAB) Members" }, 
            { label: "Electrical Engineering Industrial Advisory Board (EE IAB) Members" }, 
            { label: "Industrial Engineering Industrial Advisory Board (IE IAB) Members" },
            { label: "Mechanical Engineering Industrial Advisory Board (ME IAB) Members" },
            { label: "Manufacturing Engineering Industrial Advisory Board (MFGE IAB) Members" }
          ]
        },
        { label: "Mission and Vision" }, 
        { label: "Accreditation" },
        { label: "Enrollment & Graduation Data" },
        { label: "Open Faculty Positions" },
        { 
          label: "Policies", 
          children: [
            { label: "Tenure and Promotion" }, 
            { label: "Promotion for Faculty of Instruction" }, 
            { label: "Promotion for Faculty of Practice" } 
          ]
        }
      ]
    },
    {
      label: "Degrees & Programs", 
      children: [
        {
          label: "Undergraduate Degrees", 
          children: [
            { label: "Civil Engineering (CE)" }, 
            { label: "Electrical Engineering (EE)" }, 
            { label: "Industrial Engineering (IE)" },
            { label: "Manufacturing Engineering (MFGE)" },
            { label: "Mechanical Engineering (ME)" } 
          ]
        },
        {
          label: "Graduate Degrees", 
          children: [
            { label: "Master of Science (MS)" }, 
            { label: "Electrical Engineering (MS)" },
            { label: "Industrial and Business Operations Engineering (MS)" },
            { label: "Electrical Engineering PH.D" },
            { label: "Civil Engineering PH.D" },
            { label: "Mechanical and Manufacturing Engineering PH.D" }
          ]
        }
      ]
    },
    {
      label: "Current Students", 
      children: [
        { label: "Advising" }, 
        { label: "Student Employment" }, 
        { label: "Student Organizations" },
        { label: "Registration Errors?" },
        { label: "Scholarships" }
      ]
    },
    { 
      label: "Facilities", 
      children: [
        { label: "Facilities Info and Reservations" },
        { 
          label: "Senior Design",
          children: [
            { label: "Ingram School of Engineering Conference Rooms" },
            { label: "Ingram Hall Classrooms" },
            { label: "Roy F. Mitte Classrooms" }
          ]
        },
        { label: "Support the Ingram School of Engineering" },
        { label: "Senior Design Day - Recruitment Booth Request Form" },
        { label: "Suggest a Project" },
        { label: "Current Projects" },
        {
          label: "Prior Events - Senior Design Day",
          children: [
            { label: "Fall 2022 Senior Design Day" },
            { label: "Spring 2023 Senior Design Day" },
            { 
              label: "Fall 2023 Senior Design Day",
              children: [
                { label: "Civil Engineering (1st & 2nd)" },
                { label: "Electrical Engineering (1st & 2nd)" },
                { label: "Industrial Engineering (1st & 2nd)" },
                { label: "Manufacturing Engineering (1st & 2nd)" }
              ]
            },
            { 
              label: "Spring 2024 Senior Design Day",
              children: [
                { label: "Civil Engineering (1st & 2nd)" },
                { label: "Electrical Engineering (1st & 2nd)" },
                { label: "Industrial Engineering (1st & 2nd)" },
                { label: "Manufacturing Engineering (1st & 2nd)" }
              ]
            }
          ]
        }
      ] 
    },
    {
      label: "Cooperative Education Program",
      children: [
        { label: "Co-op Connections - Student Co-op Experiences" },
        { label: "Start Your Co-op Journey" },
        { label: "Employer Information" },
        { label: "Cooperative Education Program Contacts" },
        { label: "Forms & Resources" }
      ]
    },
    { label: "Faculty & Staff" },
    { label: "Student" },
    { 
      label: "People",
      children: [
        { label: "Faculty" },
        { label: "Staff" }
      ]
    }
  ]
};
