export interface GoalInput {
  thrustArea: string;
  title: string;
  description: string;
  uom: 'Numeric' | 'Percentage' | 'Timeline' | 'Zero-based';
  target: string;
  weightage: number;
}

export interface ValidationResult {
  isValid: boolean;
  errorMessage?: string;
}

export function validateGoalSheet(goals: GoalInput[]): ValidationResult {
  // Rule 1: Max 8 goals per employee
  if (goals.length > 8) {
    return { isValid: false, errorMessage: "Maximum number of goals per employee is 8." };
  }

  let totalWeightage = 0;

  for (const goal of goals) {
    // Rule 2: Minimum weightage per individual goal is 10%
    if (goal.weightage < 10) {
      return { isValid: false, errorMessage: `Goal "${goal.title}" must have a minimum weightage of 10%.` };
    }
    totalWeightage += goal.weightage;
  }

  // Rule 3: Total weightage across all goals must equal exactly 100%
  if (totalWeightage !== 100) {
    return { isValid: false, errorMessage: `Total weightage across all goals must equal exactly 100%. Current total: ${totalWeightage}%` };
  }

  return { isValid: true };
}

// Rule 4: System-Computed Progress Scores
export function calculateSystemScore(weightage: number, currentProgress: number, target: number): number {
  if (target <= 0) return 0;
  const achievementRate = Math.min(currentProgress / target, 1); // Cap at 100% execution
  return parseFloat(((achievementRate * weightage)).toFixed(2));
}
