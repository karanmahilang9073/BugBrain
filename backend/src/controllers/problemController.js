import Problem from "../models/Problem.js";

export const createProblem = async (req, res) => {
    try {
        const { title, problem, solution, tags } = req.body;
        const newProblem = new Problem({
            title,
            problem,
            solution,
            tags,
        });
        await newProblem.save();
        res.status(201).json(newProblem);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

export const getProblems = async (req, res) => {
    try {
        const problems = await Problem.find();
        res.status(200).json(problems);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};