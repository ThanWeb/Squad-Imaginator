const formation = [
    {
        name: `442 'Two Strikers'`,
        image: 'http://antekteknologi.my.id/wp-content/uploads/2022/09/1.png',
        // position: ["attacker-2", "attacker-3", "midfielder-4", "midfielder-5", "midfielder-9", "midfielder-10", "defender-1", "defender-2", "defender-11", "defender-12", "GK | goalkeeper"],
        positionName: ["CF | Center Forward", "CF | Center Forward", "LMF | Left Midfielder", "RMF | Right Midfielder", "CMF | Center Midfielder", "CMF | Center Midfielder", "CB | Center Back", "CB | Center Back", "LB | Left Back", "RB | Right Back", "GK | GoalKeeper"]
    },
    {
        name: `442 'One Second Strikers`, 
        image: 'http://antekteknologi.my.id/wp-content/uploads/2022/09/2.png',
        // position: ["attacker-2", "attacker-6", "midfielder-4", "midfielder-5", "midfielder-9", "midfielder-10", "defender-1", "defender-2", "defender-11", "defender-12", "GK | goalkeeper"],
        positionName: ["CF | Center Forward", "SS | Second Striker", "LMF | Left Midfielder", "RMF | Right Midfielder", "CMF | Center Midfielder", "CMF | Center Midfielder", "CB | Center Back", "CB | Center Back", "LB | Left Back", "RB | Right Back", "GK | GoalKeeper"]
    },
    {
        name: `442 'Diamond with Two Forwards'`,
        image: 'http://antekteknologi.my.id/wp-content/uploads/2022/09/3.png',
        // position: ["attacker-2", "attacker-3", "midfielder-1", "midfielder-11", "midfielder-12", "midfielder-20", "defender-1", "defender-2", "defender-11", "defender-12", "GK | goalkeeper"],
        positionName: ["CF | Center Forward", "CF | Center Forward", "AMF | Attacking Midfielder", "CMF | Center Midfielder", "CMF | Center Midfielder", "DMF | Defensive Midfielder", "CB | Center Back", "CB | Center Back", "LB | Left Back", "RB | Right Back", "GK | GoalKeeper"]
    },
    {
        name: `442 'Diamond with One Second Striker'`,
        image: 'http://antekteknologi.my.id/wp-content/uploads/2022/09/4.png',
        // position: ["attacker-2", "attacker-6", "midfielder-1", "midfielder-11", "midfielder-12", "midfielder-20", "defender-1", "defender-2", "defender-11", "defender-12", "GK | goalkeeper"],
        positionName: ["CF | Center Forward", "SS | Second Striker", "AMF | Attacking Midfielder", "CMF | Center Midfielder", "CMF | Center Midfielder", "DMF | Defensive Midfielder", "CB | Center Back", "CB | Center Back", "LB | Left Back", "RB | Right Back", "GK | GoalKeeper"]
    },
    {
        name: `433 'Two Wingers'`,
        image: 'http://antekteknologi.my.id/wp-content/uploads/2022/09/5.png',
        // position: ["attacker-1", "attacker-8", "attacker-9", "midfielder-8", "midfielder-11", "midfielder-12", "defender-1", "defender-2", "defender-11", "defender-12", "GK | goalkeeper"],
        positionName: ["CF | Center Forward", "LWF | Left Winger", "RWF | Right Winger", "CMF | Center Midfielder", "CMF | Center Midfielder", "CMF | Center Midfielder", "CB | Center Back", "CB | Center Back", "LB | Left Back", "RB | Right Back", "GK | GoalKeeper"]
    },
    {
        name: `433 'One Defensive Midfielder'`,
        image: 'http://antekteknologi.my.id/wp-content/uploads/2022/09/6.png',
        // position: ["attacker-1", "attacker-8", "attacker-9", "midfielder-11", "midfielder-12", "midfielder-20", "defender-1", "defender-2", "defender-11", "defender-12", "GK | goalkeeper"],
        positionName: ["CF | Center Forward", "LWF | Left Winger", "RWF | Right Winger", "CMF | Center Midfielder", "CMF | Center Midfielder", "DMF | Defensive Midfielder", "CB | Center Back", "CB | Center Back", "LB | Left Back", "RB | Right Back", "GK | GoalKeeper"]
    },
    {
        name: `4321 'Christmas Tree Formation'`,
        image: 'http://antekteknologi.my.id/wp-content/uploads/2022/09/7.png',
        // position: ["attacker-1", "midfielder-2", "midfielder-3", "midfielder-11", "midfielder-12", "midfielder-20", "defender-1", "defender-2", "defender-11", "defender-12", "GK | goalkeeper"],
        positionName: ["CF | Center Forward", "AMF | Attacking Midfielder", "AMF | Attacking Midfielder", "CMF | Center Midfielder", "CMF | Center Midfielder", "DMF | Defensive Midfielder", "CB | Center Back", "CB | Center Back", "LB | Left Back", "RB | Right Back", "GK | GoalKeeper"]
    },
    {
        name: `4312 'Two Strikers and One Second Striker'`,
        image: 'http://antekteknologi.my.id/wp-content/uploads/2022/09/8.png',
        // position: ["attacker-4", "attacker-5", "attacker-7", "midfielder-13", "midfielder-14", "midfielder-19", "defender-1", "defender-2", "defender-11", "defender-12", "GK | goalkeeper"],
        positionName: ["CF | Center Forward", "CF | Center Forward", "SS | Second Striker", "CMF | Center Midfielder", "CMF | Center Midfielder", "DMF | Defensive Midfielder", "CB | Center Back", "CB | Center Back", "LB | Left Back", "RB | Right Back", "GK | GoalKeeper"]
    },
    {
        name: `532 'Five at the back'`,
        image: 'http://antekteknologi.my.id/wp-content/uploads/2022/09/9.png',
        // position: ["attacker-2", "attacker-3", "midfielder-13", "midfielder-14", "midfielder-19", "defender-3", "defender-4", "defender-5", "defender-9", "defender-10", "GK | goalkeeper"],
        positionName: ["CF | Center Forward", "CF | Center Forward", "CMF | Center Midfielder", "CMF | Center Midfielder", "DMF | Defensive Midfielder", "CB | Center Back", "LCB | Left Center Back", "RCB | Right Center Back", "LB | Left Back", "RB | Right Back", "GK | GoalKeeper"]
    },
    {
        name: `532 'Five at the back and One Attacking Midfielders'`,
        image: 'http://antekteknologi.my.id/wp-content/uploads/2022/09/10.png',
        // position: ["attacker-2", "attacker-3", "midfielder-1", "midfielder-15", "midfielder-16", "defender-3", "defender-4", "defender-5", "defender-9", "defender-10", "GK | goalkeeper"],
        positionName: ["CF | Center Forward", "CF | Center Forward", "AMF | Attacking Midfielder", "CMF | Center Midfielder", "CMF | Center Midfielder", "CB | Center Back", "LCB | Left Center Back", "RCB | Right Center Back", "LB | Left Back", "RB | Right Back", "GK | GoalKeeper"]
    },
    {
        name: `541 'Five at the back and Two Midfield Wingers'`,
        image: 'http://antekteknologi.my.id/wp-content/uploads/2022/09/11.png',
        // position: ["attacker-1", "midfielder-6", "midfielder-7", "midfielder-15", "midfielder-16", "defender-3", "defender-4", "defender-5", "defender-9", "defender-10", "GK | goalkeeper"],
        positionName: ["CF | Center Forward", "LMF | Left Midfielder", "RMF | Right Midfielder", "CMF | Center Midfielder", "CMF | Center Midfielder", "CB | Center Back", "LCB | Left Center Back", "RCB | Right Center Back", "LB | Left Back", "RB | Right Back", "GK | GoalKeeper"]
    },
    {
        name: `343 'Double Pivot and Two Wingbacks'`,
        image: 'http://antekteknologi.my.id/wp-content/uploads/2022/09/12.png',
        // position: ["attacker-1", "attacker-8", "attacker-9", "midfielder-17", "midfielder-18", "midfielder-21", "midfielder-22", "defender-6", "defender-7", "defender-8", "GK | goalkeeper"],
        positionName: ["CF | Center Forward", "LWF | Left Winger", "RWF | Right Winger", "CMF | Center Midfielder", "CMF | Center Midfielder", "LWB | Left Wing Back", "RWB | Right Wing Back", "CB | Center Back", "LCB | Left Center Back", "RCB | Right Center Back", "GK | GoalKeeper"]
    },
    {
        name: `352 'One Attacking Midfielder and Two Wingbacks'`,
        image: 'http://antekteknologi.my.id/wp-content/uploads/2022/09/13.png',
        // position: ["attacker-2", "attacker-3", "midfielder-1", "midfielder-17", "midfielder-18", "midfielder-21", "midfielder-22", "defender-6", "defender-7", "defender-8", "GK | goalkeeper"],
        positionName: ["CF | Center Forward", "CF | Center Forward", "AMF | Attacking Midfielder", "CMF | Center Midfielder", "CMF | Center Midfielder", "LWB | Left Wing Back", "RWB | Right Wing Back", "CB | Center Back", "LCB | Left Center Back", "RCB | Right Center Back", "GK | GoalKeeper"]
    },
    {
        name: `361 'Two Attacking Midfielders and Two Wingbacks'`,
        image: 'http://antekteknologi.my.id/wp-content/uploads/2022/09/14.png',
        // position: ["attacker-1", "midfielder-2", "midfielder-3", "midfielder-17", "midfielder-18", "midfielder-21", "midfielder-22", "defender-6", "defender-7", "defender-8", "GK | goalkeeper"],
        positionName: ["CF | Center Forward", "AMF | Attacking Midfielder", "AMF | Attacking Midfielder", "CMF | Center Midfielder", "CMF | Center Midfielder", "LWB | Left Wing Back", "RWB | Right Wing Back", "CB | Center Back", "LCB | Left Center Back", "RCB | Right Center Back", "GK | GoalKeeper"]
    },
    {
        name: `451 'Two Midfield Wingers'`,
        image: 'http://antekteknologi.my.id/wp-content/uploads/2022/09/15.png',
        // position: ["attacker-1", "midfielder-1", "midfielder-6", "midfielder-7", "midfielder-17", "midfielder-18", "defender-1", "defender-2", "defender-11", "defender-12", "GK | goalkeeper"],
        positionName: ["CF | Center Forward", "AMF | Attacking Midfielder", "LMF | Left Midfielder", "RMF | Right Midfielder", "CMF | Center Midfielder", "CMF | Center Midfielder", "CB | Center Back", "CB | Center Back", "LB | Left Back", "RB | Right Back", "GK | GoalKeeper"]
    },
    {
        name: `4231 'Double Pivot and Two Midfield Wingers'`,
        image: 'http://antekteknologi.my.id/wp-content/uploads/2022/09/16.png',
        // position: ["attacker-1", "midfielder-6", "midfielder-7", "midfielder-15", "midfielder-16", "midfielder-20", "defender-1", "defender-2", "defender-11", "defender-12", "GK | goalkeeper"],
        positionName: ["CF | Center Forward", "LMF | Left Midfielder", "RMF | Right Midfielder", "CMF | Center Midfielder", "CMF | Center Midfielder", "DMF | Defensive Midfielder", "CB | Center Back", "CB | Center Back", "LB | Left Back", "RB | Right Back", "GK | GoalKeeper"]
    }
]

export default formation;