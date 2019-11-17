/** Defines the Player attributes interfaces */

export interface ITechnicalAttributes {
    /**
     * corners
     *
     * How accurately a player can deliver a corner kick to his intended target area.
     *
     */
    corners: number;

    /**
     * crossing
     *
     * How accurately a player can cross the ball from wide into the opposition penalty area to his intended target.
     *
     */
    crossing: number;

    /**
     * dribbling
     *
     * How well a player can control the ball while running with it.
     *
     */
    dribbling: number;

    /**
     * finishing
     *
     * How accurately a player can shoot at his intended target area of the goal.
     * Affected by composure, concentration and technique
     *
     */
    finishing: number;

    /**
     * firstTouch
     *
     * How well a player can control the ball and set it up for his next action when receiving it.
     *
     */
    firstTouch: number;

    /**
     * freeKickTaking
     *
     * How accurately a player can deliver a free kick either indirectly to his intended target area or directly into his intended target area of the goal.
     *
     */
    freeKickTaking: number;

    /**
     * heading
     *
     * How accurately a player can head the ball to his intended target area.
     *
     */
    heading: number;

    /**
     * longShots
     *
     * How accurately a player can shoot at his intended target area of the goal from outside the opposition penalty area.
     *
     */
    longShots: number;

    /**
     * longThrows
     *
     * How far a player can throw the ball at throw-ins and how accurately he can deliver a long throw to his intended target area.
     *
     */
    longThrows: number;

    /**
     * marking
     *
     * How well a player can take up a position close to an opposition player that makes him a less viable passing option.
     *
     * Affected by concentration. A player with a higher rating in concentration have higher chance of tracking opposition players,
     * while a player with lower rating in concentration can be shaked off easily by opposition players.
     *
     */
    marking: number;

    /**
     * passing
     *
     * How accurately a player can pass the ball to his intended target.
     *
     */
    passing: number;

    /**
     * penaltyTaking
     *
     * How accurately a player can take a penalty kick.
     * Affected by composure, finishing and technique
     *
     */
    penaltyTaking: number;

    /**
     * tackling
     *
     * How well a player can take the ball from an opposition player without committing a foul.
     *
     */
    tackling: number;

    /**
     * technique
     *
     * How well a player can perform more challenging technical actions when he is on the ball.
     *
     * More challenging technical actions include long passes, long shots, volleys (kicking the ball while it is in the air),
     * curling the ball, controlling a difficult ball and using complicated dribbling moves (tricks).
     *
     */
    technique: number;
}

export interface IMentalAttributes {
    /**
     * aggression
     *
     * How likely a player is to choose to get involved in a physical situation and how much he exerts physical force in such situations.
     *
     * Physical situations include attempting to tackle an opposition player,
     * marking an opposition player and competing with an opposition player to get to the ball.
     *
     * The likelihood of violent or other unsporting behaviour is not directly affected by Aggression,
     * but instead by the meta attributes Dirtiness and Sportsmanship.
     *
     * However, higher Aggression does make fouls more likely to be committed as a result of greater involvement in physical situations.
     * Therefore, a player with higher Aggression would benefit from good Tackling, Anticipation, Concentration and Decisions so that he is less likely to commit fouls.
     *
     */
    aggression: number;

    /**
     * anticipation
     *
     * How well a player can predict the movements and other actions of his teammates and opposition players.
     *
     * Higher Anticipation enables a player to react more quickly to events.
     * When he is off the ball though, his initial position will also affect how well he reacts.
     * Off The Ball and Positioning affect how well a player positions himself off the ball.
     *
     */
    anticipation: number;

    /**
     * bravery
     *
     * How willing a player is to choose to perform an action that risks pain or injury.
     *
     * Lower bravery makes a player more likely to avoid performing what he believes is the best action for the team in certain situations due to fear of the possible physical consequences for himself.
     *
     */
    bravery: number;

    /**
     * composure
     *
     * How unaffected a player is by mental pressure when making a decision or performing his chosen action.
     *
     * Mental pressure can be caused by opposition players, such as when a player is closed down,
     * or by the importance of a situation, such as when a player has a clear goal-scoring opportunity.
     *
     * Mental pressure causes a player to both make a poorer decision and perform his chosen action less accurately.
     * Higher Composure reduces this effect.
     *
     */
    composure: number;

    /**
     * concentration
     *
     * How unaffected a player is by lost focus when making a decision.
     *
     * A player gradually loses focus during a match and the more his focus falls the more likely he is to make a poorer decision.
     * Higher Concentration reduces the rate at which his focus falls.
     *
     */
    concentration: number;

    /**
     * decisions
     *
     * How well a player can evaluate the options he is aware of and choose which action to perform, when to perform it and how to perform it.
     *
     * Decisions is the most important attribute involved in decision making.
     * However, a player’s ability to make an effective decision is limited by the options he is aware of, which is affected by Vision.
     *
     */
    decisions: number;

    /**
     * determination
     *
     * How much a player tries to succeed in his actions during a match even in mentally exhausting circumstances.
     *
     * Mentally exhausting circumstances include when a player’s team is losing and when he is performing badly.
     *
     */
    determination: number;

    /**
     * flair
     *
     * How likely a player is to choose to perform an unexpected action when he is on the ball.
     *
     * An unexpected action is one that an opposition player is less likely to anticipate, such as a trick, and is therefore harder to defend against.
     *
     */
    flair: number;

    /**
     * leadership - for use later
     *
     * How inspirational and motivational a player is to his teammates.
     *
     * Leadership is the most important attribute to consider when choosing a captain.
     *
     */
    leadership: number;

    /**
     * offTheBall
     *
     * How well a player moves and positions himself,
     * to either provide a passing option or create space for teammates to exploit, when he is off the ball and his team is in possession.
     *
     * Off The Ball is the attacking equivalent of Positioning.
     *
     * A player who is off the ball may create space for a teammate by moving into an area that encourages an opposition player to move out of position in order to track him.
     *
     */
    offTheBall: number;

    /**
     * positioning
     *
     * How well a player moves and positions himself, in order to deal with an opposition attack,
     * when he is off the ball and the opposition team is in possession.
     *
     * Positioning is the defensive equivalent of Off The Ball.
     *
     */
    positioning: number;

    /**
     * teamWork
     *
     * How closely a player follows his tactical instructions and how aware he is of the positions and movements of his teammates.
     *
     * Players with higher Teamwork will play better as a unit, while a player with lower Teamwork will make more selfish decisions,
     * such as shooting at goal instead of passing to a teammate in a better position.
     *
     */
    teamWork: number;

    /**
     * vision
     *
     * How well a player observes the options available to him when he is on the ball.
     *
     * Higher Vision means a player is likely to be aware of more options and so can potentially make more effective decisions.
     * However, his decision making attributes, such as Decisions, affect how well he chooses between the options he is aware of.
     *
     */
    vision: number;

    /**
     * workRate
     *
     * How much physical effort a player puts into his actions during a match.
     *
     */
    workRate: number;
}

export interface IPhysicalAttributes {
    /**
     * acceleration
     *
     * How quickly a player can reach his maximum speed when running.
     *
     */
    acceleration: number;

    /**
     * agility
     *
     * How well a player can start, stop, and move in a new direction.
     *
     */
    agility: number;

    /**
     * balance
     *
     * How well a player can stay steady on his feet when he is under physical pressure.
     *
     * Physical pressure is caused by opposition players trying to get to the ball ahead of a player or trying to win the ball from him,
     * and can occur when a player is moving or stationary.
     *
     */
    balance: number;

    /**
     * jumpingReach
     *
     * How high a player’s head can reach when jumping.
     *
     * A player’s height only affects whether he needs to jump and how much effort he needs to put into a jump,
     * but is particularly important when a player is competing with an opposition player to get to an aerial ball.
     * Taller players tend to have higher Jumping Reach due to their height advantage.
     *
     */
    jumpingReach: number;

    /**
     * naturalFitness
     *
     * How well a player can retain condition when injured or not training,
     * recover condition between matches, gain match fitness when playing matches and avoid jadedness caused by matches and training.
     * Also how well a player is able to retain his physical attribute ratings as he ages.
     *
     *
     *
     */
    naturalFitness: number;

    /**
     * pace
     *
     * How fast a player can run when he has reached his maximum speed.
     *
     * A player is able to run slightly faster without the ball than with it.
     *
     */
    pace: number;

    /**
     * stamina
     *
     * How well a player can retain condition while exerting effort during a match.
     *
     * The higher a player’s condition is, the better he will perform any action.
     * The more effort a player puts in during a match the more his condition will fall. Higher Stamina reduces this effect.
     *
     */
    stamina: number;

    /**
     * strength
     *
     * How well a player is able to exert physical force on an opposition player.
     *
     * Strength affects how likely a player is to succeed in a physical situation such as when shielding the ball from an opposition player while standing or dribbling,
     * when attempting to tackle an opposition player, when marking an opposition player and when competing with an opposition player to get to the ball.
     *
     */
    strength: number;
}

export interface IGoalKeepingAttributes {
    /**
     * aerialAbility - for use later
     *
     * How high a goalkeeper’s hands can reach when jumping.
     *
     * Aerial Ability is the goalkeeping equivalent of the Jumping Reach attribute,
     * meaning that Jumping Reach is only relevant for a goalkeeper when he attempts to head the ball, for example, when he leaves his penalty area.
     *
     */
    aerialAbility: number;

    /**
     * handling
     *
     * How well a goalkeeper can hold on to the ball when attempting to catch it.
     *
     * Higher Handling reduces the likelihood of the ball being dropped or parried, potentially giving the opposition a goal-scoring opportunity or corner.
     * It is particularly useful in wet weather conditions.
     *
     */
    handling: number;

    /**
     * kicking
     *
     * How far a goalkeeper can kick the ball.
     *
     * The accuracy of kicks is not affected by Kicking, but instead by Passing and Technique.
     * The creativity attributes Anticipation, Decisions, Teamwork and Vision also affect the effectiveness of a goalkeeper’s passing and kicking.
     *
     */
    kicking: number;

    /**
     * oneOnOne
     *
     * How well a goalkeeper can deal with one-on-one situations against opposition attackers.
     *
     */
    oneOnOne: number;

    /**
     * reflex
     *
     * How well a goalkeeper can react to shots.
     *
     */
    reflex: number;

    /**
     * rushingOut
     *
     * How well a goalkeeper can decide whether to run forward to try to claim loose balls and opposition passes close to his penalty area.
     *
     * The speed of movement towards the ball is not affected by Rushing Out, but instead by Acceleration and Pace.
     * Anticipation, Composure, Concentration and Decisions also affect how well a decision is made whether to rush out.
     *
     */
    rushingOut: number;

    /**
     * tendencyToPunch
     *
     * How likely a goalkeeper is to choose to punch when dealing with an aerial ball that is potentially catchable.
     *
     * Anticipation, Composure, Concentration and Decisions also affect how well a decision is made whether to punch or catch.
     * Higher Tendency To Punch can cause a goalkeeper to put more pressure on your defence by not catching the ball.
     * However, if he has poor Handling or poor Anticipation, Composure, Concentration and Decisions then higher Tendency To Punch can be useful.
     * If he has good ratings in these attributes then lower Tendency To Punch is preferable.
     *
     */
    tendencyToPunch: number;

    /**
     * throwing
     *
     * How accurately a goalkeeper can throw the ball to teammates.
     *
     * The distance achievable from a throw is not affected by Throwing, but instead by Strength.
     *
     */
    throwing: number;
}

export interface IMetaAttributes {
    /**
     * dirtiness
     *
     * How likely a player is to break the rule in high pressure situations like tackling.
     * A higher rating means a more stuck-in and dirty approach
     *
     */
    dirtiness: number;

    /**
     * sportsmanship
     *
     * Describes how ethical a player is
     *
     * More likely to respect the opposition team during a match; for example,
     * by not trying to fool the referee into giving his team a free kick or penalty, or by putting the ball out of play when an opposition player is injured.
     * This means that his match performance is more likely to be ethical.
     *
     */
    sportsmanship: number;

    /**
     * temperament
     *
     * Describes how disciplined a player’s conduct is when events go against him.
     *
     */
    temperament: number;
}
