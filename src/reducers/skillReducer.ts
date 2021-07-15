import {
    ISkillState,
    ISkillAction,
    ADD_SKILL,
    ADD_KEYWORD,
    REMOVE_KEYWORD,
} from "./../schema";

// For DAIICT Resume Format
const initialSkillState: ISkillState = {
    data: [
        {
            name: "Expertise",
            keywords: [],
        },
        {
            name: "ToolsAndTechnologies",
            keywords: [],
        },
        {
            name: "Languages",
            keywords: [],
        },
    ],
    error: "",
};

export const skillReducer = (
    state = initialSkillState,
    action: ISkillAction
): ISkillState => {
    switch (action.type) {
        case ADD_SKILL: {
            return {
                ...state,
                data: [...state.data, action.payload],
            };
        }

        case ADD_KEYWORD: {
            const skillFound = state.data.find(
                (skill) => skill.name === action.payload.skillName
            );
            skillFound?.keywords.push(action.payload.keywordText);

            if (skillFound) {
                return {
                    ...state,
                    data: state.data.map((x) =>
                        x === skillFound ? skillFound : x
                    ),
                };
            } else {
                return state;
            }
        }

        case REMOVE_KEYWORD: {
            const skillFound = state.data.find(
                (skill) => skill.name === action.payload.skillName
            );
            if (skillFound) {
                const keywordIndex = skillFound.keywords.indexOf(
                    action.payload.keywordText
                );
                if (keywordIndex !== -1) {
                    skillFound.keywords.splice(keywordIndex, 1);
                }

                return {
                    ...state,
                    data: state.data.map((x) =>
                        x === skillFound ? skillFound : x
                    ),
                };
            } else {
                return state;
            }
        }
        default:
            return state;
    }
};
