import anpr from '../resources/proj/anpr.jpg'
import campuscart from '../resources/proj/campuscart.jpg'
import elderlycare from '../resources/proj/elderlycare.jpg'
import micromouse from '../resources/proj/micromouse.jpg'
import portfolio from '../resources/proj/portfolio.png'
import touchlesspad from '../resources/proj/touchless.jpg'
import linefollow from '../resources/proj/line_follow.png'

export const technologies = [
    'OpenCV', 'Arduino' ,'Reactjs', 'Flask (Backend)', 'Github (Git)'
]

export const acheivements = [
    '1st Runner Up in Vedant 12.0 at MITs Techtatva', 'UAE Golden Visa Holder'
]

export const pro_languages = [
    'Python', 'JavaScript' , 'C', 'Java', 'HTML', 'CSS'
]

export const web_languages = [
    'HTML', 'CSS', 'JavaScript', 'React.js'
]

export const ling = [
    'English (Fluent)', 'Hindi', 'Konkani', 'Germany (Learning)'
]

export const proj = [
    {
        id: 1,
        name: 'Line Follower Robot',
        desc: ['A line follower robot that uses PID control to follow a black line on a white surface or vice versa.',
                ' The robot uses 5 IR sensors to detect the line and 2 DC motors to move the robot. The robot is controlled by an Arduino Uno.',
                'Utilized a closed loop feedback system to control the speed of the motors variably based on the position of the robot on the line.',
                'Participated in competitions in India'
            ],
        tech: ['Arduino', 'C++', 'Embedded Systems'],
        gitlink: 'https://github.com/RNCManipal/time_challenge/tree/main',
        resource: linefollow
    },

    {
        id: 2,
        name: 'Micromouse bot',
        desc: ['A micromouse bot that uses a maze solving algorithm to find the shortest path to the center of the maze.',
                'Implements the flood-fill algorithm for finding shortest path to the center of the maze.',
                'The bot uses 4 ultrasonic sensors and 2 DC motors to move the bot. The bot is controlled by an Arduino Micro.',
                'Utilizes a closed loop PID system to rotate about its axis and travel from one point to another.',
                'Collaborated with teammates and acted as a POC to team leader of the club for the project.'
            ],
        tech: ['Arduino', 'C++', 'Embedded Systems'],
        gitlink: 'https://github.com/RNCManipal/micromouse_2023',
        resource: micromouse
    },
    {
        id: 3,
        name: 'ElderlyCare WebApp',
        desc: ['Collaborated with two other team members to build a Social-Connectivity web application for mental healthcare directed towards the older generation',
                'Made an emotion recognizer in python to capture the dominant emotion of a user from a video file.',
                'Developed the UI and UX for the site using Figma templates and React.js.',
                'Helped in implementing the user log-in and log-out functionalities.',
            ],
        tech: ['React.js', 'Python', 'Google Cloud Platform', 'Figma'],
        gitlink: 'https://github.com/Jansxn/GFG_Hack_2023',
        resource: elderlycare
    },
    {
        id: 4,
        name: 'CampusCart WebApp',
        desc: ['Built a full stack web application for a campus e-commerce platform.',
                'Developed the UI and UX for the site using React.js and the backend with flask, mysql, XAMPP.',
                'Implemented a review system for sellers to get feedback from buyers.',
                'Buyers have a buy history through which they can review the items they have bought.',
            ],
        tech: ['React.js', 'Python (Flask)', 'MySQL', 'XAMPP'],
        gitlink: 'https://github.com/Jansxn/campuscart',
        resource: campuscart
    },
    {
        id: 5,
        name: 'ANPR Software',
        desc: ['Built a number plate recognition system in Python. It works along side a face-recognition system to identify the owner of the vehicle (Implemented by other team members).',
                'Used YOLO object recognition software to detect and crop out the images of cars.',
                'These images are saved and then passed through a software to recognize the number plate. and save the numberplate in a database.',
                'Face recognition is also performed on these images to identify the owner of the vehicle.',
            ],
        tech: ['Python', 'YOLO', 'OpenCV', 'KerasOCR'],
        gitlink: 'https://github.com/RNCManipal/Kavach',
        resource: anpr
    },
    {
        id: 6,
        name: 'Touchless Writing Pad',
        desc: ['Developed a software along with three other team members that enables end user to control the entire pc using only hand gestures.',
                'Contains character recognition software to function as a quick access taskbar.',
                'Utilizes OpenCV, for image detection, mediapipe for hand detection, tensorflow for character recognition and Numpy for image transfiguration',
                'Showcased in MITs Techtatva and and won 2nd place in the Vedant competiton'
            ],
        tech: ['Python', 'OpenCV', 'Tensorflow', 'Mediapipe'],
        gitlink: 'https://github.com/RNCManipal/TouchlessPad',
        resource: touchlesspad
    },
    {
        id: 7,
        name: 'Portfolio Website',
        desc: ['Developed this website using React.js and Node.js',
                'Designed the UI and UX for the site using Figma',
                'Used React.js to make the website update the style and content dynamically when new content is added to a json file',
                'Utilized CSS and Javascript to make the webite responsive across all devices',
            ],
        tech: ['React.js', 'Node.js', 'Figma'],
        gitlink: 'https://github.com/Jansxn/portfolio',
        resource: portfolio
    }
]

export const exp = [
    {
        id: 1,
        comp_name: 'Robotics and Circuits Club',
        role: 'Coding Domain Member',
        location: 'Manipal, India',
        desc: ['Worked on multiple projects in the coding domain of the RnC student club in my college.',
                'Collaborated with team members to build a Micromouse (Maze-Solving) Bot in Arduino to participate in competitions across India.',
                'Developed a numberplate recognition software to be used by CCTV cameras for Kavach’23.',
                'Reduced time delay by over 50% in drawing characters as well as added an automatic image cropping feature for character detection in a project which helped our team get 2nd place in MITs Techtatva Event.',
                'Conducted interviews for new members attempting to join the club',
                'Participated in multiple competitions in India.'
            ],
        duration: 'April 2022 - Present',
        resource: 'https://roboticsandcircuits.com/'
    },
    {
        id: 2,
        comp_name: 'Robotics and Circuits Club',
        role: 'Coding Domain Member',
        location: 'Manipal, India',
        desc: ['Worked on multiple projects in the coding domain of the RnC student club in my college.',
                'Worked with team members to build a Micromouse (Maze-Solving) Bot in Arduino to participate in competitions across India.',
                'Developed a numberplate recognition software to be used by CCTV cameras for Kavach’23.',
                'Reduced time delay by over 50% in drawing characters as well as added an automatic image cropping feature for character detection in a project which helped our team get 2nd place in MITs Techtatva Event.',
                'Conducted interviews for new members attempting to join the club',
                'Participated in multiple competitions in India.'
            ],
        duration: 'April 2022 - Present',
        resource: 'https://roboticsandcircuits.com/'
    },
]