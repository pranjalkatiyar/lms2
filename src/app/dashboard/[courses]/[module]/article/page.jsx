"use client";
import Article from "@/app/components/Article";
import ModuleSidebar from "../sidebar";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useGetCourseDetails } from "@/hooks/useCourses";

// In a real application, you would fetch this data from an API
export const articleData = [
  {
    course_article_id: "c1",
    course_article_subpath: "/dashboard/general",
    articles: [
      {
        id: "1.0",
        title: "Overview of FMS",
        subtitle: "",
        content: [
          {
            type: "paragraph",
            content:
              "Before the advent of the Flight Management System (FMS), Inertial Navigation Systems (INS), or GPS, pilots relied on older navigation techniques such as dead reckoning and celestial navigation. These methods were essential in the early days of aviation, particularly for long-distance flights over oceans or remote areas without radio navigation aids. Combining methods like celestial navigation and dead reckoning, crew member designated as Navigator used to determine the aircraft’s position and error along the track for transoceanic flights. ",
          },
          {
            type: "paragraph",
            content:
              "As humans attempted to stretch the envelope and distances travelled by air, they were met with multiple challenges. To accomplish any successful transcontinental or transoceanic flight which consist of crossing of oceans, extensive mountain ranges or vast untouched lands like Amazonia it requires a precise lateral Navigation which would get regular updates from reliable sources, it also requires precise vertical Navigation information to determine if Aircraft will be capable of climbing and maintaining the altitude in order to cross mountain ranges like Himalayas or Rockies and further more to add to those complexities you need a way to command the aircraft to execute that flight with all that information precisely.  Until very recently celestial navigation and dead reckoning was used in commercial and defense aircrafts Lockheed RC-121D, A-10A even the first generations of 747 had sextant ports in the overhead panel of flightdeck. To accomplish this task the Flight deck crew consisted of a minimum of 4 crew members sometimes extending to 6 it included Navigator and Flight Engineer. ",
          },
        ],
      },
      {
        id: "1.1",
        title: "FMC and ACARS Relationship",
        subtitle: "",
        content: [
          {
            type: "paragraph",
            content:
              "By the 1930s and 1940s, radio navigation aids, such as VOR (Very High Frequency Omnidirectional Range) and NDB (Non-Directional Beacon), became more common. These systems significantly improved navigation accuracy over dead reckoning and celestial navigation by providing real-time positional information through radio signals. Pilots could follow specific courses (radio beams) to or from radio stations, which allowed for more accurate navigation, particularly in bad weather. By the 1960’s adoption of VOR/DME systems, inertial navigation (IRS/INS), and eventually GPS rendered dead reckoning and celestial navigation largely obsolete, particularly for commercial aviation. Today, dead reckoning is primarily used as a backup method in case of instrument failure, and celestial navigation is almost entirely retired from aviation, except in certain military or specialized fields. We will discuss Inertial navigation and GPS systems in detail in upcoming modules. ",
          },
          {
            type: "heading",
            content: "Consolidation of Flight Crew 1.2",
          },
          {
            type: "paragraph",
            content:
              "With advancement in digital avionics and database technology, the need for Navigator and Flight Engineer was reduced as Navigation database could be stored and processed so could the performance database.  Flight Management System brought the new technology but also made some Jobs obsolete. After the advancement in EICAS (Engine indication and crew alerting system) and EEC (Engine electronic control) demand for Flight engineer was not there anymore",
          },
          {
            type: "image",
            content: "/sextant.png",
          },
          // {
          //   type: "paragraph",
          //   content:
          //     "Machine Learning, a subset of AI, has seen tremendous growth in recent years. It's the driving force behind many of the AI applications we use today, from voice assistants to recommendation systems.",
          // },
          // {
          //   type: "paragraph",
          //   content:
          //     "Here we will learn about the fundamental's of flight management and different features of FMS which are integrated to make entire flight possible from Place A to B. We will learn about Lateral navigation and vertical navigation. We will learn about how Performance inputs are directly linked to vertical navigation. And relationship between Route, legs and Progress page for Lateral Navigation.",
          // },
        ],
      },
      {
        id: "2.0",
        title: "Setting Up the Preflight Phase",
        subtitle: "",
        content: [
          {
            type: "paragraph",
            content:
              "FMS (Flight Management System) is considered the brains of the Aircraft. FMS plays a crucial role in modern aircraft operation ranging from small transport category aircraft to Wide body Aircraft or Defense Aircraft. FMS combines data from navigation, performance, and flight control systems to streamline complex tasks, enhancing operational efficiency, safety, and ease of use in the cockpit. ",
          },
          {
            type: "paragraph",
            content:
              "FMS: Consist of many components integrated together in the system hence the name flight management system. ",
          },
          {
            type: "heading",
            content: "FMS and Auto flight Components.",
          },
          {
            type: "subheading",
            content: "Control and Display Unit (CDU): ",
          },
          {
            type: "paragraph",
            content:
              "This is the primary interface where pilots interact with the FMS. The CDU has a keypad and display screen, allowing pilots to enter data, update flight plans, check navigational information, and monitor system status. In normal operations both pilots should not make simultaneous entries in L and R CDU because both L and R FMC’s need to synchronize before executing a command. ",
          },
          {
            type: "subheading",
            content: "Flight Management Computer (FMC): ",
          },
          {
            type: "paragraph",
            content:
              "The FMC is the core processor of the FMS, running all algorithms for navigation, performance, and route management. It continuously monitors data from sensors and navigational inputs, optimizing performance calculations and adjusting commands. Normally there are two FMC’s located in the electronic component bay of the aircraft, these FMC’s are referred to as L FMC and R FMC ",
          },
        ],
      },
      {
        id: "2.1",
        title: "Programming the Route",
        subtitle: "",
        content: [
          {
            type: "paragraph",
            content:
              "Navigation Database: This database includes waypoints, airways, airports, standard instrument departure (SID) routes, standard terminal arrival routes (STAR), and approach procedures. Updated periodically, it provides a structured set of navigational data to the FMS. ",
          },
          {
            type: "heading",
            content: "Performance Database",
          },
          {
            type: "paragraph",
            content:
              "Each aircraft has its own tailored performance charts which are issued by manufacturers like Boeing or airbus.  Performance database aids Vertical navigation in calculating vertical path of the aircraft inputs like temperature density and barometric pressure are the factors which affect these calculations. ",
          },
          {
            type: "heading",
            content: "Sensors and Inputs",
          },
          {
            type: "paragraph",
            content:
              "The FMS relies on multiple sensors, such as GPS, inertial navigation system (INS), air data computer and radio-based aids (VOR/DME) to determine precise position and track. These inputs provide continuous location updates for the FMS to calculate and adjust the flight path.",
          },
        ],
      },
      {
        id: "2.2",
        title: "Fuel and Weight Management",
        subtitle: "",
        content: [
          {
            type: "heading",
            content: "Precise Navigation and Routing",
          },
          {
            type: "paragraph",
            content:
              "With help of navigation database FMS allows Aircraft navigation in complex environments, extending from terminal environment to mountainous terrain or oceanic airspace where ground-based navigation is not available as back up for GPS. FMS sends commands to Auto-flight components such as Flight control computer to execute a precise Automated flight.  ",
          },
          {
            type: "heading",
            content: "Performance and Vertical Navigation  ",
          },
          {
            type: "paragraph",
            content:
              "Calculation for Climb angles and obstacle clearance is calculated using performance database. The FMS calculates optimal speeds, altitudes, and fuel consumption rates based on the aircraft’s weight, environmental conditions, and desired route. This performance optimization helps reduce fuel costs and increase operational efficiency.It continuously monitors fuel usage and adjusts parameters to achieve optimal economy, supporting cost management and fuel savings. ",
          },
          {
            type: "heading",
            content: "Automatic Flight Guidance",
          },
          {
            type: "paragraph",
            content:
              "Through autopilot integration, the FMS enables automated flight path management. It can guide the aircraft during climbs, cruise, descents, and approaches, automatically following altitude, speed, and course requirements.Functions such as Required Navigation Performance (RNP) and area navigation (RNAV) allow for precise navigation, even in complex airspace or areas with limited ground-based navigational aids.",
          },
          {
            type: "heading",
            content: "Flight planning and route management and modifications.",
          },
          {
            type: "paragraph",
            content:
              "  FMS stores a wide variety of navigation databases, this data can be country or continent specific or it can be a worldwide database. A navigation database consists of Airport information such as runway’s, SID’s (Standard instrument departures)/transition, terminal waypoints, enroute waypoints and STAR’s (Standard terminal arrival), enroute airways. With the wide variety of data, FMS can significantly reduce pilot workload and make tasks like programming the flight plan very efficient. ",
          },
          {
            type: "heading",
            content: "Communication and Datalink capabilities: ",
          },
          {
            type: "paragraph",
            content:
              "FMS has many sub-modules like ACARS (Aircraft communication and crew addressing system), SAT (Satellite communication) and AMC (Aircraft maintenance communication). One of the important features of datalink capability is automatic uploading of Engine failure Acceleration height from airlines performance database provider.  ",
          },
        ],
      },
      {
        id: "3.0",
        title: "FPL page & LNAV/VNAV Exercises",
        subtitle: "",
        content: [
          {
            type: "paragraph",
            content:
              "FMS (Flight Management System) is considered the brains of the Aircraft. FMS plays a crucial role in modern aircraft operation ranging from small transport category aircraft to Wide body Aircraft or Defense Aircraft. FMS combines data from navigation, performance, and flight control systems to streamline complex tasks, enhancing operational efficiency, safety, and ease of use in the cockpit. ",
          },
          {
            type: "paragraph",
            content:
              "FMS: Consist of many components integrated together in the system hence the name flight management system. ",
          },
          {
            type: "heading",
            content: "FMS and Auto flight Components.",
          },
          {
            type: "subheading",
            content: "Control and Display Unit (CDU): ",
          },
          {
            type: "paragraph",
            content:
              "This is the primary interface where pilots interact with the FMS. The CDU has a keypad and display screen, allowing pilots to enter data, update flight plans, check navigational information, and monitor system status. In normal operations both pilots should not make simultaneous entries in L and R CDU because both L and R FMC’s need to synchronize before executing a command. ",
          },
          {
            type: "subheading",
            content: "Flight Management Computer (FMC): ",
          },
          {
            type: "paragraph",
            content:
              "The FMC is the core processor of the FMS, running all algorithms for navigation, performance, and route management. It continuously monitors data from sensors and navigational inputs, optimizing performance calculations and adjusting commands. Normally there are two FMC’s located in the electronic component bay of the aircraft, these FMC’s are referred to as L FMC and R FMC ",
          },
        ],
      },
      {
        id: "3.1",
        title: "Real-Time Communication with ACARS",
        subtitle: "",
        content: [
          {
            type: "paragraph",
            content:
              "Navigation Database: This database includes waypoints, airways, airports, standard instrument departure (SID) routes, standard terminal arrival routes (STAR), and approach procedures. Updated periodically, it provides a structured set of navigational data to the FMS. ",
          },
          {
            type: "heading",
            content: "Performance Database",
          },
          {
            type: "paragraph",
            content:
              "Each aircraft has its own tailored performance charts which are issued by manufacturers like Boeing or airbus.  Performance database aids Vertical navigation in calculating vertical path of the aircraft inputs like temperature density and barometric pressure are the factors which affect these calculations. ",
          },
          {
            type: "heading",
            content: "Sensors and Inputs",
          },
          {
            type: "paragraph",
            content:
              "The FMS relies on multiple sensors, such as GPS, inertial navigation system (INS), air data computer and radio-based aids (VOR/DME) to determine precise position and track. These inputs provide continuous location updates for the FMS to calculate and adjust the flight path.",
          },
        ],
      },
      {
        id: "3.2",
        title: "Adjusting Flight Parameters",
        subtitle: "",
        content: [
          {
            type: "heading",
            content: "Precise Navigation and Routing",
          },
          {
            type: "paragraph",
            content:
              "With help of navigation database FMS allows Aircraft navigation in complex environments, extending from terminal environment to mountainous terrain or oceanic airspace where ground-based navigation is not available as back up for GPS. FMS sends commands to Auto-flight components such as Flight control computer to execute a precise Automated flight.  ",
          },
          {
            type: "heading",
            content: "Performance and Vertical Navigation  ",
          },
          {
            type: "paragraph",
            content:
              "Calculation for Climb angles and obstacle clearance is calculated using performance database. The FMS calculates optimal speeds, altitudes, and fuel consumption rates based on the aircraft’s weight, environmental conditions, and desired route. This performance optimization helps reduce fuel costs and increase operational efficiency.It continuously monitors fuel usage and adjusts parameters to achieve optimal economy, supporting cost management and fuel savings. ",
          },
          {
            type: "heading",
            content: "Automatic Flight Guidance",
          },
          {
            type: "paragraph",
            content:
              "Through autopilot integration, the FMS enables automated flight path management. It can guide the aircraft during climbs, cruise, descents, and approaches, automatically following altitude, speed, and course requirements.Functions such as Required Navigation Performance (RNP) and area navigation (RNAV) allow for precise navigation, even in complex airspace or areas with limited ground-based navigational aids.",
          },
          {
            type: "heading",
            content: "Flight planning and route management and modifications.",
          },
          {
            type: "paragraph",
            content:
              "  FMS stores a wide variety of navigation databases, this data can be country or continent specific or it can be a worldwide database. A navigation database consists of Airport information such as runway’s, SID’s (Standard instrument departures)/transition, terminal waypoints, enroute waypoints and STAR’s (Standard terminal arrival), enroute airways. With the wide variety of data, FMS can significantly reduce pilot workload and make tasks like programming the flight plan very efficient. ",
          },
          {
            type: "heading",
            content: "Communication and Datalink capabilities: ",
          },
          {
            type: "paragraph",
            content:
              "FMS has many sub-modules like ACARS (Aircraft communication and crew addressing system), SAT (Satellite communication) and AMC (Aircraft maintenance communication). One of the important features of datalink capability is automatic uploading of Engine failure Acceleration height from airlines performance database provider.  ",
          },
        ],
      },
      {
        id: "3.3",
        title: "RNP and RNAV in the 121 world",
        subtitle: "",
        content: [
          {
            type: "paragraph",
            content:
              "By the 1930s and 1940s, radio navigation aids, such as VOR (Very High Frequency Omnidirectional Range) and NDB (Non-Directional Beacon), became more common. These systems significantly improved navigation accuracy over dead reckoning and celestial navigation by providing real-time positional information through radio signals. Pilots could follow specific courses (radio beams) to or from radio stations, which allowed for more accurate navigation, particularly in bad weather. By the 1960’s adoption of VOR/DME systems, inertial navigation (IRS/INS), and eventually GPS rendered dead reckoning and celestial navigation largely obsolete, particularly for commercial aviation. Today, dead reckoning is primarily used as a backup method in case of instrument failure, and celestial navigation is almost entirely retired from aviation, except in certain military or specialized fields. We will discuss Inertial navigation and GPS systems in detail in upcoming modules. ",
          },
          {
            type: "heading",
            content: "Consolidation of Flight Crew 1.2",
          },
          {
            type: "paragraph",
            content:
              "With advancement in digital avionics and database technology, the need for Navigator and Flight Engineer was reduced as Navigation database could be stored and processed so could the performance database.  Flight Management System brought the new technology but also made some Jobs obsolete. After the advancement in EICAS (Engine indication and crew alerting system) and EEC (Engine electronic control) demand for Flight engineer was not there anymore",
          },
          {
            type: "image",
            content: "/sextant.png",
          },
          // {
          //   type: "paragraph",
          //   content:
          //     "Machine Learning, a subset of AI, has seen tremendous growth in recent years. It's the driving force behind many of the AI applications we use today, from voice assistants to recommendation systems.",
          // },
          // {
          //   type: "paragraph",
          //   content:
          //     "Here we will learn about the fundamental's of flight management and different features of FMS which are integrated to make entire flight possible from Place A to B. We will learn about Lateral navigation and vertical navigation. We will learn about how Performance inputs are directly linked to vertical navigation. And relationship between Route, legs and Progress page for Lateral Navigation.",
          // },
        ],
      },
      {
        id: "3.4",
        title: "Approaches",
        subtitle: "",
        content: [
          {
            type: "paragraph",
            content:
              "FMS (Flight Management System) is considered the brains of the Aircraft. FMS plays a crucial role in modern aircraft operation ranging from small transport category aircraft to Wide body Aircraft or Defense Aircraft. FMS combines data from navigation, performance, and flight control systems to streamline complex tasks, enhancing operational efficiency, safety, and ease of use in the cockpit. ",
          },
          {
            type: "paragraph",
            content:
              "FMS: Consist of many components integrated together in the system hence the name flight management system. ",
          },
          {
            type: "heading",
            content: "FMS and Auto flight Components.",
          },
          {
            type: "subheading",
            content: "Control and Display Unit (CDU): ",
          },
          {
            type: "paragraph",
            content:
              "This is the primary interface where pilots interact with the FMS. The CDU has a keypad and display screen, allowing pilots to enter data, update flight plans, check navigational information, and monitor system status. In normal operations both pilots should not make simultaneous entries in L and R CDU because both L and R FMC’s need to synchronize before executing a command. ",
          },
          {
            type: "subheading",
            content: "Flight Management Computer (FMC): ",
          },
          {
            type: "paragraph",
            content:
              "The FMC is the core processor of the FMS, running all algorithms for navigation, performance, and route management. It continuously monitors data from sensors and navigational inputs, optimizing performance calculations and adjusting commands. Normally there are two FMC’s located in the electronic component bay of the aircraft, these FMC’s are referred to as L FMC and R FMC ",
          },
        ],
      },
      {
        id: "4.0",
        title: "Diversions and Alternate Airports",
        subtitle: "",
        content: [
          {
            type: "paragraph",
            content:
              "Navigation Database: This database includes waypoints, airways, airports, standard instrument departure (SID) routes, standard terminal arrival routes (STAR), and approach procedures. Updated periodically, it provides a structured set of navigational data to the FMS. ",
          },
          {
            type: "heading",
            content: "Performance Database",
          },
          {
            type: "paragraph",
            content:
              "Each aircraft has its own tailored performance charts which are issued by manufacturers like Boeing or airbus.  Performance database aids Vertical navigation in calculating vertical path of the aircraft inputs like temperature density and barometric pressure are the factors which affect these calculations. ",
          },
          {
            type: "heading",
            content: "Sensors and Inputs",
          },
          {
            type: "paragraph",
            content:
              "The FMS relies on multiple sensors, such as GPS, inertial navigation system (INS), air data computer and radio-based aids (VOR/DME) to determine precise position and track. These inputs provide continuous location updates for the FMS to calculate and adjust the flight path.",
          },
        ],
      },
      {
        id: "4.1",
        title: "Emergency Procedures (Optional)",
        subtitle: "",
        content: [
          {
            type: "heading",
            content: "Precise Navigation and Routing",
          },
          {
            type: "paragraph",
            content:
              "With help of navigation database FMS allows Aircraft navigation in complex environments, extending from terminal environment to mountainous terrain or oceanic airspace where ground-based navigation is not available as back up for GPS. FMS sends commands to Auto-flight components such as Flight control computer to execute a precise Automated flight.  ",
          },
          {
            type: "heading",
            content: "Performance and Vertical Navigation  ",
          },
          {
            type: "paragraph",
            content:
              "Calculation for Climb angles and obstacle clearance is calculated using performance database. The FMS calculates optimal speeds, altitudes, and fuel consumption rates based on the aircraft’s weight, environmental conditions, and desired route. This performance optimization helps reduce fuel costs and increase operational efficiency.It continuously monitors fuel usage and adjusts parameters to achieve optimal economy, supporting cost management and fuel savings. ",
          },
          {
            type: "heading",
            content: "Automatic Flight Guidance",
          },
          {
            type: "paragraph",
            content:
              "Through autopilot integration, the FMS enables automated flight path management. It can guide the aircraft during climbs, cruise, descents, and approaches, automatically following altitude, speed, and course requirements.Functions such as Required Navigation Performance (RNP) and area navigation (RNAV) allow for precise navigation, even in complex airspace or areas with limited ground-based navigational aids.",
          },
          {
            type: "heading",
            content: "Flight planning and route management and modifications.",
          },
          {
            type: "paragraph",
            content:
              "  FMS stores a wide variety of navigation databases, this data can be country or continent specific or it can be a worldwide database. A navigation database consists of Airport information such as runway’s, SID’s (Standard instrument departures)/transition, terminal waypoints, enroute waypoints and STAR’s (Standard terminal arrival), enroute airways. With the wide variety of data, FMS can significantly reduce pilot workload and make tasks like programming the flight plan very efficient. ",
          },
          {
            type: "heading",
            content: "Communication and Datalink capabilities: ",
          },
          {
            type: "paragraph",
            content:
              "FMS has many sub-modules like ACARS (Aircraft communication and crew addressing system), SAT (Satellite communication) and AMC (Aircraft maintenance communication). One of the important features of datalink capability is automatic uploading of Engine failure Acceleration height from airlines performance database provider.  ",
          },
        ],
      },
      {
        id: "5.0",
        title: "General",
        subtitle: "",
        content: [
          {
            type: "paragraph",
            content:
              "Before the advent of the Flight Management System (FMS), Inertial Navigation Systems (INS), or GPS, pilots relied on older navigation techniques such as dead reckoning and celestial navigation. These methods were essential in the early days of aviation, particularly for long-distance flights over oceans or remote areas without radio navigation aids. Combining methods like celestial navigation and dead reckoning, crew member designated as Navigator used to determine the aircraft’s position and error along the track for transoceanic flights. ",
          },
          {
            type: "paragraph",
            content:
              "As humans attempted to stretch the envelope and distances travelled by air, they were met with multiple challenges. To accomplish any successful transcontinental or transoceanic flight which consist of crossing of oceans, extensive mountain ranges or vast untouched lands like Amazonia it requires a precise lateral Navigation which would get regular updates from reliable sources, it also requires precise vertical Navigation information to determine if Aircraft will be capable of climbing and maintaining the altitude in order to cross mountain ranges like Himalayas or Rockies and further more to add to those complexities you need a way to command the aircraft to execute that flight with all that information precisely.  Until very recently celestial navigation and dead reckoning was used in commercial and defense aircrafts Lockheed RC-121D, A-10A even the first generations of 747 had sextant ports in the overhead panel of flightdeck. To accomplish this task the Flight deck crew consisted of a minimum of 4 crew members sometimes extending to 6 it included Navigator and Flight Engineer. ",
          },
        ],
      },
      {
        id: "6.0",
        title: "Troubleshooting and Advanced Features",
        subtitle: "",
        content: [
          {
            type: "paragraph",
            content:
              "Navigation Database: This database includes waypoints, airways, airports, standard instrument departure (SID) routes, standard terminal arrival routes (STAR), and approach procedures. Updated periodically, it provides a structured set of navigational data to the FMS. ",
          },
          {
            type: "heading",
            content: "Performance Database",
          },
          {
            type: "paragraph",
            content:
              "Each aircraft has its own tailored performance charts which are issued by manufacturers like Boeing or airbus.  Performance database aids Vertical navigation in calculating vertical path of the aircraft inputs like temperature density and barometric pressure are the factors which affect these calculations. ",
          },
          {
            type: "heading",
            content: "Sensors and Inputs",
          },
          {
            type: "paragraph",
            content:
              "The FMS relies on multiple sensors, such as GPS, inertial navigation system (INS), air data computer and radio-based aids (VOR/DME) to determine precise position and track. These inputs provide continuous location updates for the FMS to calculate and adjust the flight path.",
          },
        ],
      },
    ],
  },
  {
    course_article_id: "c2",
    course_article_subpath: "/dashboard/airbus_a320",
    articles: [
      {
        id: "1.0",
        title: "MCDU Component Overview",
        subtitle: "",
        content: [
          {
            type: "image",
            content: "/course/airbus_a320/mcdu_overview1.png",
          },
        ],
      },
      {
        id: "1.1",
        // title: "",
        title:"Keys & Annunciator Functionalities",
        // subtitle: "STORED AND NEW WAYPOINT PAGES",
        content: [
          {
            type: "image",
            content: "/course/airbus_a320/component_1.png",
          },
          {
            type: "heading",
            content: "MCDU Component :",
          },
          {
            type: "html",
            content: `<ol>
  <li>1. Annunciators</li>
  <li>2. Line select keys</li>
  <li>3. Top Annunciators</li>
  <li>4. Display Page keys</li>
  <li>5. Airport pages</li>
  <li>6. Slew keys</li>
  <li>7. Front annunciators</li>
</ol>
`,
          },
          {
            type: "image",
            content: "/course/airbus_a320/component_2.png",
          },
        ],
      },
      {
        id: "c2_exercise",
        title: "OFP Instruction Exercise",
        subtitle: "",
        type: "exercise",
        content: [
          {
            title: "Instruction",
            type: "html",
            content: `<p><strong>MCDU simulator consists of two Sub-modules: FMC and ACARS</strong></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;"><strong>Note:</strong> Entry fields with boxes are mandatory entry fields for data entry. To switch between FMC and ACARS use Menu key, FMC functions are available by selecting any FMC function such as LEGS, VNAV, PROG or any other FMC function key. Currently 7 airports databases are available. To restart the application and remove all the stored data in FMC and ACARS recycle the Navigation Database, from FMC Ident Screen.</span></p>
<p>&nbsp;</p>
<p><strong>Initial steps for FMC and ACRAS Preflight</strongstyle=></p>

<ol>
<p>&nbsp;</p>
<li style="font-weight: 400;">1. <span style="font-weight: 400;">Menu screen: Select the city pair operational flight plan (OFP) from the drop down menu, we recommend printing out the PDF document. Select origin airport and destination airport and select start.</span></li>
<p>&nbsp;</p><li style="font-weight: 400;">2. <span style="font-weight: 400;">Once Submodule selection screen, on the left screen you will see two prompts &lt;FMC, &lt;ACARS. Select FMC prompt, this will navigate to INIT REF screen, verify current valid navigation database dates and select POS INIT, inside POS INIT function use page 2 to copy GPS LAT/LONG information and navigate to page 1 and input the coordinates in the IRS position.</span></li>
<p>&nbsp;</p><li style="font-weight: 400;">3. <span style="font-weight: 400;">Navigate to ACARS and select Preflight&gt;INIT DATA use the flight plan to input information on this screen. Press return to navigate to the AOC menu and Select Requests and request ATIS for the departure Airport.</span></li>

<p>&nbsp;</p><li style="font-weight: 400;">4. <span style="font-weight: 400;">Now navigate back to FMC and Use OFP to input and program route information.</span></li>

<p>&nbsp;</p><li style="font-weight: 400;">5. <span style="font-weight: 400;">Navigate to the Perf init screen and input data from the FMS INIT portion of the flight plan.</span></li>
<p>&nbsp;</p><li style="font-weight: 400;">6. <span style="font-weight: 400;">Next use legs page to verify the flight plan and request cruise winds.</span></li>
<p>&nbsp;</p><li style="font-weight: 400;">7. <span style="font-weight: 400;">Navigate to the progress screen and verify the route mileage.</span></li>
<p>&nbsp;</p><li style="font-weight: 400;">8. <span style="font-weight: 400;">Navigate to the VNAV page and verify climb speeds and first altitude constraint.</span></li>
<p>&nbsp;</p><li style="font-weight: 400;">9. <span style="font-weight: 400;">Verify all the screens and cross check data entries using OFP and the weather information.&nbsp;</span></li>
</ol>
<!-- Comments are visible in the HTML source only -->
`,
          },
          {
            title: "Exercise",
            type: "html",
            content: `<p><strong>===========================================================</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OPERATIONAL FLIGHT PLAN | 09FEB25 0100Z&nbsp; | FAR PART 121</strong></p>
<p><strong>===========================================================</strong></p>
<p><strong>FLIGHT NO</strong><span style="font-weight: 400;">: XAL171 &nbsp; | DATE: 09 FEB 2025&nbsp; | A/C: B738</span></p>
<p><span style="font-weight: 400;">ROUTE: KJFK &rarr; KLAX&nbsp; | ALTN: KSFO</span></p>
<p><span style="font-weight: 400;">-----------------------------------------------------------</span></p>
<p><span style="font-weight: 400;">DEP: KJFK &nbsp; ETD: 2230Z &nbsp; | &nbsp; ARR: KLAX&nbsp; ETA: 0418Z</span></p>
<p><span style="font-weight: 400;">-----------------------------------------------------------</span></p>
<p><span style="font-weight: 400;">DIST: 2361 NM &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; WC:&nbsp; H71&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; DRAG/FF: 0/ +4.9</span></p>
<p><span style="font-weight: 400;">CI: 10&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; CRUISE ALT: FL360</span></p>
<p><strong>ROUTE</strong><span style="font-weight: 400;">: </span><span style="font-weight: 400;">RBV Q430 AIR J80 ZANDR GVR PXV Q28 ESTEE MYERZ ZERTY RZC HITUG IRW ODOYU TXO KA27W ONM HIPPI GABBL HLYWD1</span></p>
<p><span style="font-weight: 400;">-----------------------------------------------------------</span></p>
<p><strong>FMS INITIAL DATA - - - -&nbsp;</strong></p>
<p><span style="font-weight: 400;">KLAX REF POINT</span></p>
<p><strong>ZFW&nbsp; </strong><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;148500 / 157000S</span></p>
<p><strong>TOW</strong><span style="font-weight: 400;">&nbsp; &nbsp; &nbsp; &nbsp; 185707 / 188000L</span></p>
<p><strong>LW &nbsp; </strong><span style="font-weight: 400;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;155757 / 163900S</span></p>
<p><span style="font-weight: 400;">-----------------------------------------------------------</span></p>
<p><strong>FUEL PLANNING (LBS)</strong></p>
<p><span style="font-weight: 400;">KSFO&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 04:48 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 25563&nbsp; (88.76)</span></p>
<p><span style="font-weight: 400;">FAR &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 00:45 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;3657&nbsp; (81.26)</span></p>
<p><span style="font-weight: 400;">CF &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;00:25 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; 2000</span></p>
<p><span style="font-weight: 400;">MIN T/O &nbsp; &nbsp; &nbsp; 06:58 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 31220</span></p>
<p><span style="font-weight: 400;">EXTRA &nbsp; &nbsp; &nbsp; &nbsp; 00:15 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1202 &nbsp; (WX deviations)</span></p>
<p><span style="font-weight: 400;">PLAN T/O &nbsp; &nbsp;&nbsp; 07:13&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;38433</span></p>
<p><span style="font-weight: 400;">TAXI &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; 00:15 &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; 1226</span></p>
<p><span style="font-weight: 400;">REMF&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 02:10&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; 11539</span></p>
<p><span style="font-weight: 400;">-----------------------------------------------------------</span></p>
<p><span style="font-weight: 400;">WEATHER &amp; NOTAMS SUMMARY:</span></p>
<p><span style="font-weight: 400;">- KJFK: 24015G25KT 10SM OVC060 03/M01 A2992</span></p>
<p><span style="font-weight: 400;">- KLAX: 27010KT 15SM SCT020 08/06 A3005</span></p>
<p><span style="font-weight: 400;">- Possible turbulence over ZANDR</span></p>
<p><span style="font-weight: 400;">-----------------------------------------------------------</span></p>
<p><span style="font-weight: 400;">ALTERNATE PLAN:</span></p>
<p><span style="font-weight: 400;">KSFO(San Francisco Intl) Routing Via -&gt;BSR.BSR3</span></p>
<p><span style="font-weight: 400;">-----------------------------------------------------------</span></p>
<p><span style="font-weight: 400;">DISPATCHER: John Doe &nbsp; | &nbsp; CAPTAIN: Maverick Goose</span></p>
<p class="demoTitle"><br /><br /><br /><br /><br /></p>
<p><strong>Please see next Page for Final Performance:</strong></p>
<p><strong>Use final numbers and Request take-off Data from ACARS &mdash;</strong></p>
<br/>
<p><strong>Final Weights</strong></p>

<p><span style="font-weight: 400;">ZFW - 148450</span></p>
<p><span style="font-weight: 400;">MTOW - 185657</span></p>
<p class="demoTitle"><br /><br /><br /></p>
<p><span style="font-weight: 400;">KJFK CF680C2B1F</span></p>
<p><span style="font-weight: 400;">FLT NO RLS NO TIME</span></p>
<p><span style="font-weight: 400;">8675 6 2341Z</span></p>
<p><span style="font-weight: 400;">WIND KTS OAT C QNH</span></p>
<p><span style="font-weight: 400;">060/12 +12 29.87</span></p>
<p><span style="font-weight: 400;">------------------------------------</span></p>
<p><span style="font-weight: 400;">GRWT 395.8 VREF30 183</span></p>
<p><span style="font-weight: 400;">FUEL 163.4</span></p>
<p><span style="font-weight: 400;">ZFW 232.4</span></p>
<p><span style="font-weight: 400;">REMARKS</span></p>
<p><span style="font-weight: 400;">NONE</span></p>
<p class="demoTitle">&nbsp;</p>
<p><span style="font-weight: 400;">KLAX 07L 12091</span></p>
<p><span style="font-weight: 400;">MTOW 395.8  SMRGN 778</span></p>
<p><span style="font-weight: 400;">FLAPS 20&nbsp; &nbsp;   PACKS ON</span></p>
<p><span style="font-weight: 400;">ATM --- &nbsp; &nbsp;  &nbsp;  V1 155</span></p>
<p><span style="font-weight: 400;">THR TO 1&nbsp; &nbsp;  &nbsp;  VR 172</span></p>
<p><span style="font-weight: 400;">N1 101.9 &nbsp; &nbsp;  &nbsp;  V2 181</span></p>
<p><span style="font-weight: 400;">CG 17.2 &nbsp; &nbsp;  &nbsp; TRIM 7.8</span></p>
<p class="demoTitle">&nbsp;</p>
<p><span style="font-weight: 400;">RT H250 ACCEL 1000</span></p>
<p class="demoTitle"><br /><br /></p>
<!-- Comments are visible in the HTML source only -->`,
          },
        ],
      },
      {
        id: "2.0",
        // title: "",
        title:"Initialization and MCDU Menu selection",
        // subtitle: "Initial screen, MCDU Menu and INIT/Route Selection",
        content: [
          {
            type: "image",
            content: "/course/airbus_a320/init_1.png",
          },
          {
            type: "paragraph",
            content:
              "MCDU Main Menu page: On this page Pilots can navigate to different subsystems of the application. FMGC, Data Link, AIDS, CFDS.",
          },
          {
            type: "image",
            content: "/course/airbus_a320/init_2.png",
          },
          {
            type: "heading",
            content: "Route Selection",
          },
          // {
          //   type: "paragraph",
          //   content:
          //     "-Manually: The Pilot presses the FROM/TO or ALTN Key on the INIT A page when a city pair is displayed.",
          // },
          // {
          //   type: "paragraph",
          //   content:
          //     "-Automatically: The System display it, when the pilot enters a city pair, or defines an alternate on the INIT A page of the active or secondary flight plan.",
          // },
          {
            type: "image",
            content: "/course/airbus_a320/init_3.png",
          },
        ],
      },
      {
        id: "2.1",
        title: "IRIS INIT",
        subtitle: "Inertial Reference system alignment.",
        content: [
          {
            type: "image",
            content: "/course/airbus_a320/init_2_1.png",
          },{
            type:"table",
            content:{
              left:"LAT-REFERENCE-LONG",
              right:"This line provides the latitude and longitude of the FM reference position. This reference is extracted from the navigation database.The flight crew can modify this reference. Only when the FM reference position matches the origin airport position, the airport identifier is displayed in green. Otherwise, there are dashes at the place of the airport identifier. Latitude and longitude of the FM reference position. ar displayed in blue. The flight crew can modify the latitude and longitude values using the scroll keys. "
            }
          }
        ],
      },{
        id:"2.2",
        title:"Climb, Cruise and Descend Wind Request",
        content:[
          {
            type:"image",
            content:"/course/airbus_a320/init_3_1.png"
          }
        ]
      }
    ],
  },
];

export default function Page({params}) {
  // const params = useSearchParams();
  // const id = params.get("id");
  // const pathname = usePathname();
  // const [currentArticle, setCurrentArticle] = useState();
  // console.log(params, id, pathname);

  const {data,isLoading,isError}=useGetCourseDetails(React.use(params.courses));
  console.log(data);

  // useEffect(() => {
  //   setCurrentArticle(() => {
  //     const filteredArticleData = articleData.filter((article) =>
  //       pathname.includes(article.course_article_subpath)
  //     );
  //     console.log("filtered", filteredArticleData);
  //     const setdata = filteredArticleData[0]?.articles?.find(
  //       (article) => article.id == id
  //     );
  //     return setdata;
  //   });
  // }, [id]);

  if (!currentArticle) {
    return <div>"loading"</div>;
  }

  return (
    // <ModuleSidebar>
    <Article article={currentArticle} />
    // </ModuleSidebar>
  );
}
