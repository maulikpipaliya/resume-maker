import {
    SkillActionType,
    ISkillAction,
} from "./../schema/action-types/ISkillAction"

import { ISkillState } from "./../schema/state/ISkillState"

// For DAIICT Resume Format
const initialSkillState: ISkillState = {
    data: [
        {
            name: "Expertise",
            keywords: [],
        },
        {
            name: "Languages",
            keywords: [],
        },
        {
            name: "ToolsAndTechnologies",
            keywords: [],
        },
    ],
    error: "",
    message: "",
}

export const skillReducer = (
    state = initialSkillState,
    action: ISkillAction
): ISkillState => {
    switch (action.type) {
        case SkillActionType.ADD_SKILL: {
            //check if skill already exists
            const existSkill = state.data.findIndex(
                (skill) => skill.name === action.payload.name
            )
            if (existSkill === -1) {
                return {
                    ...state,
                    data: [...state.data, action.payload],
                    message: `New skill category ${action.payload} added`,
                    error: "",
                }
            } else {
                return {
                    ...state,
                    message: `SkillCategory ${action.payload.name} already exists`,
                }
            }
        }

        case SkillActionType.ADD_KEYWORD: {
            console.log("adding")

            const keyword = action.payload.keyword
            const skillName = action.payload.name
            const stateDataCopy = [...state.data]
            const skillIndex = stateDataCopy.findIndex(
                (s) => s.name === skillName
            )

            if (skillIndex === -1) {
                console.log("skill not found")
                return {
                    ...state,
                    error: "Skill not found",
                    message: "",
                }
            }

            const keywordIndex = stateDataCopy[skillIndex].keywords.findIndex(
                (s) => s === keyword
            )
            if (keywordIndex === -1) {
                console.log("Adding keyword")
                stateDataCopy[skillIndex].keywords.push(keyword)
                return {
                    ...state,
                    data: stateDataCopy,
                    message: "Keyword added",
                    error: "",
                }
            } else {
                console.log("Keyword already exists")
                return {
                    ...state,
                    error: "Keyword already exists",
                    message: "",
                }
            }
        }

        case SkillActionType.DELETE_KEYWORD: {
            //find if skill exists
            const skillName = action.payload.name
            const stateDataCopy = [...state.data]
            const skillIndex = stateDataCopy.findIndex(
                (s) => s.name === skillName
            )

            if (skillIndex === -1) {
                return {
                    ...state,
                    error: "Skill not found",
                    message: "",
                }
            }

            //find if keyword exists in that skill
            const keyword = action.payload.keyword
            const keywordIndex = stateDataCopy[skillIndex].keywords.findIndex(
                (s) => s === keyword
            )
            if (keywordIndex === -1) {
                return {
                    ...state,
                    error: "Keyword not found",
                    message: "",
                }
            }
            stateDataCopy[skillIndex].keywords.splice(keywordIndex, 1)
            return {
                ...state,
                data: stateDataCopy,
                message: `Keyword at index ${keywordIndex} deleted`,
                error: "",
            }
        }
        default:
            return state
    }
}
