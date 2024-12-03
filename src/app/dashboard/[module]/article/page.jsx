"use client";
import Article from "@/app/components/Article";
import ModuleSidebar from "../sidebar";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// In a real application, you would fetch this data from an API
const articleData = [
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
];

export default function Page() {
  const params = useSearchParams();
  const id = params.get("id");
  const [currentArticle, setCurrentArticle] = useState();
  useEffect(() => {
    setCurrentArticle(() => {
      const setdata = articleData.find((article) => article.id == id);
      return setdata;
    });
  }, [id]);

  if (!currentArticle) {
    return <div>"loading"</div>;
  }

  return (
    // <ModuleSidebar>
    <Article article={currentArticle} />
    // </ModuleSidebar>
  );
}
