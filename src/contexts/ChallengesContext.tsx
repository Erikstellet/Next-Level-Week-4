import { createContext, ReactNode, useState } from 'react'
import challenges from '../../challenges.json';

interface Challenge
{
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData
{
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    experienceToNextLevel: number;
    completeChallenge: () => void;
    resetChallenge: () => void;
    levelUp: () => void;
    startNewChallenge: () => void;
}

interface ChallengesProviderProps
{
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps)
{
    const [level, setLevel] = useState(1);
    const [ currentExperience, setCurrentExperience ] = useState(0);
    const [ challengesCompleted, setchallengesCompleted ] = useState(0);

    const [ activeChallenge, setActiveChallenge ] = useState(null);
    const experienceToNextLevel = Math.pow((level + 1) *4, 2);

    function levelUp()
    {
        setLevel(level + 1);
    }
    
    function resetChallenge()
    {
        setActiveChallenge(null);
    }

    function completeChallenge()
    {
        if (!activeChallenge) return;

        const { amount } = activeChallenge;

        let finalExperience = currentExperience + amount;

    }

    function startNewChallenge()
    {   
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);
    }
    
    return (
        <ChallengesContext.Provider value={{ level,
                                             currentExperience,
                                             challengesCompleted,
                                             levelUp,
                                             activeChallenge,
                                             experienceToNextLevel,
                                             resetChallenge,
                                             completeChallenge,
                                             startNewChallenge }}>
            { children }
        </ChallengesContext.Provider>
    )
}