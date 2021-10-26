import { Knot } from "./Types";

interface Spline<T extends Knot> {
	SolvePosition(alpha: number): Vector3;
	SolveVelocity(alpha: number): Vector3;
	SolveAcceleration(alpha: number): Vector3;
	SolveTangent(alpha: number): Vector3;
	SolveNormal(alpha: number): Vector3;
	SolveBinormal(alpha: number): Vector3;
	SolveCurvature(alpha: number): Vector3;
	SolveCFrame(alpha: number): CFrame;
	SolveLength(a?: number, b?: number): number;
	SolveRotCFrame(alpha: number): CFrame;

	SolveUniformPosition(alpha: number): Vector3;
	SolveUniformVelocity(alpha: number): Vector3;
	SolveUniformAcceleration(alpha: number): Vector3;
	SolveUniformTangent(alpha: number): Vector3;
	SolveUniformNormal(alpha: number): Vector3;
	SolveUniformBinormal(alpha: number): Vector3;
	SolveUniformCurvature(alpha: number): Vector3;
	SolveUniformCFrame(alpha: number): CFrame;
	SolveUniformlength(a?: number, b?: number): number;
	SolveUniformRotCFrame(alpha: number): CFrame;
}

interface SplineConstructor {
	new <T extends Knot>(k0: T, k1: T, k2: T, k3: T, alpha?: number, tension?: number): Spline<T>;
}

declare const Spline: SplineConstructor;
export = Spline;
