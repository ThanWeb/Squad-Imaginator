const formation = [
    {
        name: `442 'Two Strikers'`,
        image: 'http://antekteknologi.my.id/wp-content/uploads/2022/09/1.png',
        position: ["attacker-2", "attacker-3", "midfielder-4", "midfielder-5", "midfielder-9", "midfielder-10", "defender-1", "defender-2", "defender-11", "defender-12", "goalkeeper"],
        positionName: ["CF", "CF", "LMF", "RMF", "CMF", "CMF", "CB", "CB", "LB", "RB", "GK"]
    },
    {
        name: `442 'One Second Strikers`, 
        image: 'http://antekteknologi.my.id/wp-content/uploads/2022/09/2.png',
        position: ["attacker-2", "attacker-6", "midfielder-4", "midfielder-5", "midfielder-9", "midfielder-10", "defender-1", "defender-2", "defender-11", "defender-12", "goalkeeper"],
        positionName: ["CF", "SS", "LMF", "RMF", "CMF", "CMF", "CB", "CB", "LB", "RB", "GK"]
    },
    {
        name: `442 'Diamond with Two Forwards'`,
        image: 'http://antekteknologi.my.id/wp-content/uploads/2022/09/3.png',
        position: ["attacker-2", "attacker-3", "midfielder-1", "midfielder-11", "midfielder-12", "midfielder-20", "defender-1", "defender-2", "defender-11", "defender-12", "goalkeeper"],
        positionName: ["CF", "CF", "AMF", "CMF", "CMF", "DMF", "CB", "CB", "LB", "RB", "GK"]
    },
    {
        name: `442 'Diamond with One Second Striker'`,
        image: 'http://antekteknologi.my.id/wp-content/uploads/2022/09/4.png',
        position: ["attacker-2", "attacker-6", "midfielder-1", "midfielder-11", "midfielder-12", "midfielder-20", "defender-1", "defender-2", "defender-11", "defender-12", "goalkeeper"],
        positionName: ["CF", "SS", "AMF", "CMF", "CMF", "DMF", "CB", "CB", "LB", "RB", "GK"]
    },
    {
        name: `433 'Two Wingers'`,
        image: 'http://antekteknologi.my.id/wp-content/uploads/2022/09/5.png',
        position: ["attacker-1", "attacker-8", "attacker-9", "midfielder-8", "midfielder-11", "midfielder-12", "defender-1", "defender-2", "defender-11", "defender-12", "goalkeeper"],
        positionName: ["CF", "LWF", "RWF", "CMF", "CMF", "CMF", "CB", "CB", "LB", "RB", "GK"]
    },
    {
        name: `433 'One Defensive Midfielder'`,
        image: 'http://antekteknologi.my.id/wp-content/uploads/2022/09/6.png',
        position: ["attacker-1", "attacker-8", "attacker-9", "midfielder-11", "midfielder-12", "midfielder-20", "defender-1", "defender-2", "defender-11", "defender-12", "goalkeeper"],
        positionName: ["CF", "LWF", "RWF", "CMF", "CMF", "DMF", "CB", "CB", "LB", "RB", "GK"]
    },
    {
        name: `4321 'Christmas Tree Formation'`,
        image: 'http://antekteknologi.my.id/wp-content/uploads/2022/09/7.png',
        position: ["attacker-1", "midfielder-2", "midfielder-3", "midfielder-11", "midfielder-12", "midfielder-20", "defender-1", "defender-2", "defender-11", "defender-12", "goalkeeper"],
        positionName: ["CF", "AMF", "AMF", "CMF", "CMF", "DMF", "CB", "CB", "LB", "RB", "GK"]
    },
    {
        name: `4312 'Two Strikers and One Second Striker'`,
        image: 'http://antekteknologi.my.id/wp-content/uploads/2022/09/8.png',
        position: ["attacker-4", "attacker-5", "attacker-7", "midfielder-13", "midfielder-14", "midfielder-19", "defender-1", "defender-2", "defender-11", "defender-12", "goalkeeper"],
        positionName: ["CF", "CF", "SS", "CMF", "CMF", "DMF", "CB", "CB", "LB", "RB", "GK"]
    },
    {
        name: `532 'Five at the back'`,
        image: 'http://antekteknologi.my.id/wp-content/uploads/2022/09/9.png',
        position: ["attacker-2", "attacker-3", "midfielder-13", "midfielder-14", "midfielder-19", "defender-3", "defender-4", "defender-5", "defender-9", "defender-10", "goalkeeper"],
        positionName: ["CF", "CF", "CMF", "CMF", "DMF", "CB", "LCB", "RCB", "LB", "RB", "GK"]
    },
    {
        name: `532 'Five at the back and One Attacking Midfielders'`,
        image: 'http://antekteknologi.my.id/wp-content/uploads/2022/09/10.png',
        position: ["attacker-2", "attacker-3", "midfielder-1", "midfielder-15", "midfielder-16", "defender-3", "defender-4", "defender-5", "defender-9", "defender-10", "goalkeeper"],
        positionName: ["CF", "CF", "AMF", "CMF", "CMF", "CB", "LCB", "RCB", "LB", "RB", "GK"]
    },
    {
        name: `541 'Five at the back and Two Midfield Wingers'`,
        image: 'http://antekteknologi.my.id/wp-content/uploads/2022/09/11.png',
        position: ["attacker-1", "midfielder-6", "midfielder-7", "midfielder-15", "midfielder-16", "defender-3", "defender-4", "defender-5", "defender-9", "defender-10", "goalkeeper"],
        positionName: ["CF", "LMF", "RMF", "CMF", "CMF", "CB", "LCB", "RCB", "LB", "RB", "GK"]
    },
    {
        name: `343 'Double Pivot and Two Wingbacks'`,
        image: 'http://antekteknologi.my.id/wp-content/uploads/2022/09/12.png',
        position: ["attacker-1", "attacker-8", "attacker-9", "midfielder-17", "midfielder-18", "midfielder-21", "midfielder-22", "defender-6", "defender-7", "defender-8", "goalkeeper"],
        positionName: ["CF", "LWF", "RWF", "CMF", "CMF", "LWB", "RWB", "CB", "LCB", "RCB", "GK"]
    },
    {
        name: `352 'One Attacking Midfielder and Two Wingbacks'`,
        image: 'http://antekteknologi.my.id/wp-content/uploads/2022/09/13.png',
        position: ["attacker-2", "attacker-3", "midfielder-1", "midfielder-17", "midfielder-18", "midfielder-21", "midfielder-22", "defender-6", "defender-7", "defender-8", "goalkeeper"],
        positionName: ["CF", "CF", "AMF", "CMF", "CMF", "LWB", "RWB", "CB", "LCB", "RCB", "GK"]
    },
    {
        name: `361 'Two Attacking Midfielders and Two Wingbacks'`,
        image: 'http://antekteknologi.my.id/wp-content/uploads/2022/09/14.png',
        position: ["attacker-1", "midfielder-2", "midfielder-3", "midfielder-17", "midfielder-18", "midfielder-21", "midfielder-22", "defender-6", "defender-7", "defender-8", "goalkeeper"],
        positionName: ["CF", "AMF", "AMF", "CMF", "CMF", "LWB", "RWB", "CB", "LCB", "RCB", "GK"]
    },
    {
        name: `451 'Two Midfield Wingers'`,
        image: 'http://antekteknologi.my.id/wp-content/uploads/2022/09/15.png',
        position: ["attacker-1", "midfielder-1", "midfielder-6", "midfielder-7", "midfielder-17", "midfielder-18", "defender-1", "defender-2", "defender-11", "defender-12", "goalkeeper"],
        positionName: ["CF", "AMF", "LMF", "RMF", "CMF", "CMF", "CB", "CB", "LB", "RB", "GK"]
    },
    {
        name: `4231 'Double Pivot and Two Midfield Wingers'`,
        image: 'http://antekteknologi.my.id/wp-content/uploads/2022/09/16.png',
        position: ["attacker-1", "midfielder-6", "midfielder-7", "midfielder-15", "midfielder-16", "midfielder-20", "defender-1", "defender-2", "defender-11", "defender-12", "goalkeeper"],
        positionName: ["CF", "LMF", "RMF", "CMF", "CMF", "DMF", "CB", "CB", "LB", "RB", "GK"]
    }
]

export default formation;