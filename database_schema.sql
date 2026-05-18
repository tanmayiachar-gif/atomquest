-- Core DB setup for AtomQuest Goal Tracking Portal

-- 1. Create Roles Enum
CREATE TYPE user_role AS ENUM ('Employee', 'Manager', 'Admin');
CREATE TYPE uom_type AS ENUM ('Numeric', 'Percentage', 'Timeline', 'Zero-based');
CREATE TYPE goal_status AS ENUM ('Draft', 'Submitted', 'Approved', 'Locked');

-- 2. Users Profile Table
CREATE TABLE profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id),
    email TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    role user_role DEFAULT 'Employee' NOT NULL,
    manager_id UUID REFERENCES profiles(id)
);

-- 3. Goal Sheets Table
CREATE TABLE goal_sheets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES profiles(id) NOT NULL,
    total_weightage INT DEFAULT 0 CHECK (total_weightage <= 100),
    status goal_status DEFAULT 'Draft' NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Goals Table (With Constraints)
CREATE TABLE goals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    sheet_id UUID REFERENCES goal_sheets(id) ON DELETE CASCADE NOT NULL,
    thrust_area TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    uom uom_type NOT NULL,
    target TEXT NOT NULL,
    weightage INT NOT NULL CHECK (weightage >= 10), -- Rule: Min 10%
    current_progress INT DEFAULT 0,
    system_score NUMERIC(5,2) DEFAULT 0.00
);
