const result = {
    extrovert: {
        heading: {
            text: "You're an Extrovert",
            fontFamily: "Cabin Bold"
        },
        para: {
            1: "You're heavy on the extrovert end of the spectrum. One study found that about 15% of people are very extroverted like you.",
            2: "You like working in teams, hanging out in big groups, and meeting new people. You process problems best by talking them out with others, but you often make snap decisions before thoroughly considering the issue at all. You're bold and outgoing, and social gatherings always leave you feeling energized. If you spend too much time alone, you tend to sink into a depression.",
            fontFamily: "Cabin Regular"
        },
        learnMore: {
            text: "Extroverts spend more time thinking about others than themselves, so they can benefit greatly from working with a psychic for a little introspection.",
            link: "https://www.pathforwardpsychics.com/psychic-readings/astrology"
        },
        image: {
            src: "infographics/interactive-names/extrovert.svg",
            alt: "Extrovert"
        },
        score: {
            min: 10,
            max: 15
        }
    },
    introvert: {
        heading: {
            text: "You're an Introvert",
            fontFamily: "Cabin Bold"
        },
        para: {
            1: "You're extremely introverted. About 8% of people feel that they're on this end of the spectrum.",
            2: "You value your alone time and do your best work when you're on your own. You like to keep your social circle small, and you may experience stress and anxiety if you're in a large group, particularly if it includes a lot of strangers. When you need to recharge, some peaceful alone time is just the thing. As an introvert, you spend a lot of time connecting with your inner self. Introverts are more likely to discover and express the \"real me\" than extroverts who focus more on others.",
            fontFamily: "Cabin Regular"
        },
        learnMore: {
            text: "As an introvert, you'll benefit greatly from speaking with a psychic. An intuitive advisor will understand where you're coming from and can help you chart your course.",
            link: "https://www.pathforwardpsychics.com/psychic-readings/astrology"
        },
        image: {
            src: "infographics/interactive-names/introvert.svg",
            alt: "Introvert"
        },
        score: {
            min: 26,
            max: 30
        }
    },
    ambivert: {
        heading: {
            text: "You're an Ambivert",
            fontFamily: "Cabin Bold"
        },
        para: {
            1: "You're an ambivert, somewhere on the middle of the spectrum. About 77% of people are here in the middle with you. Looking at the bar above, you can see exactly where you fall.",
            2: "Ambiverts have traits of both introverts and extroverts. You may enjoy being the center of attention on occasion but prefer to follow your bustling Saturday night party with a quiet Sunday alone. You enjoy a good conversation with friends but don't feel compelled to linger on the phone with your plumber asking after their family. You have a well-balanced attitude that serves you especially well at work and in leadership situations.",
            fontFamily: "Cabin Regular"
        },
        learnMore: {
            text: "As an ambivert you have a balanced focus between yourself and others. Speaking with a psychic may help you see where your attentions are most needed right now so you'll know you're focusing on the right things.",
            link: "https://www.pathforwardpsychics.com/psychic-readings/astrology"
        },
        image: {
            src: "infographics/interactive-names/ambivert.svg",
            alt: "Ambivert"
        },
        score: {
            min: 16,
            max: 25
        }
    }
}

const questions = {
    1: {
        question: "What role do you typically play when you're hanging out with a group of people?",
        options: {
            1: "I enjoy being in the middle of the action.",
            2: "I'm outgoing with close friends and more reserved with new people.",
            3: "I like to hang back and observe."
        }
    },
    2: {
        question: "How do you like to pass the time when you're stuck in a long line?",
        options: {
            1: "I'll start a conversation with the people around me.",
            2: "I'll text or call a friend.",
            3: "I keep my eyes on my phone and hope no one talks to me."
        }
    },
    3: {
        question: "After a long hard day, what's your favorite way to unwind?",
        options: {
            1: "I like to get together with friends for dinner or a movie.",
            2: "Depending on my mood, I might go out or I might stay in.",
            3: "I'm happiest alone with a good book or movie."
        }
    },
    4: {
        question: "What's your favorite type of vacation destination?",
        options: {
            1: "A bustling city or theme park with lots going on at once.",
            2: "An inclusive resort with a little of everything, from private beach cabanas to exciting bars and lounges.",
            3: "A private cabin in the woods far from the busyness of the world."
        }
    },
    5: {
        question: "What's your favorite table at a restaurant?",
        options: {
            1: "A big table with family-style seating or a seat at the bar where I can meet new people.",
            2: "A table just for my party but with a good view for people watching.",
            3: "A private booth in the back where we're secluded from the other diners."
        }
    },
    6: {
        question: "At a party, how do you approach people you don't know?",
        options: {
            1: "I walk up and introduce myself to anyone I don't know.",
            2: "I wait for others to approach me, but I enjoy listening to new people share their stories.",
            3: "I always stick close to my crowd and tend to avoid parties where I don't know most everyone."
        }
    },
    7: {
        question: "You're painting your house for the first time and need some advice on the project. What's your plan of attack?",
        options: {
            1: "Go into a home improvement store and chat up the paint associates and other nearby shoppers to get some tips and information.",
            2: "Call a few friends to get their advice.",
            3: "Research the task online"
        }
    },
    8: {
        question: "You're unhappy with a purchase you made and need to speak with someone to resolve the issue. What do you do?",
        options: {
            1: "Go into the store or call the company to have a long chat about the problem.",
            2: "Use the online chat feature.",
            3: "Send an email."
        }
    },
    9: {
        question: "You have a whole day alone at home with no pressing obligations. What are you thinking?",
        options: {
            1: "It's too quiet here! I wonder who I can invite over.",
            2: "Ahh this is nice for a day, and I'll enjoy my family's company even more when they get back tomorrow.",
            3: "I wish I had this kind of solitude all the time!"
        }
    },
    10: {
        question: "It's Friday night! What's your go-to activity after a long week?",
        options: {
            1: "Head out to a public place or a party to mix and mingle.",
            2: "Enjoy a night in spending time with the family or a couple close friends.",
            3: "Take some alone time to recharge."
        }
    }
}

