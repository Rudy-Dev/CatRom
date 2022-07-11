type ValidPointType = CFrame | Vector3 | Vector2;

interface CatRom<T = ValidPointType> {
	SolvePosition(t: number): Vector3;
	SolveCFrame(t: number): CFrame;
	SolveRotCFrame(t: number): CFrame;
	SolveVelocity(t: number): Vector3;
	SolveAcceleration(t: number): Vector3;
	SolveTangent(t: number): Vector3;
	SolveNormal(t: number): Vector3;
	SolveBinormal(t: number): Vector3;
	SolveCurvature(t: number): [number, Vector3];
	SolveLength(a?: number, b?: number): number;

	SolveUniformPosition(t: number): Vector3;
	SolveUniformCFrame(t: number): CFrame;
	SolveUniformRotCFrame(t: number): CFrame;
	SolveUniformVelocity(t: number): Vector3;
	SolveUniformAcceleration(t: number): Vector3;
	SolveUniformTangent(t: number): Vector3;
	SolveUniformNormal(t: number): Vector3;
	SolveUniformBinormal(t: number): Vector3;
	SolveUniformCurvature(t: number): [number, Vector3];
	SolveUniformLength(a?: number, b?: number): number;

	PrecomputeArcLengthParams(numINtervals?: number): void;
}

interface CatRomConstructor {
	new <T = ValidPointType>(points: Array<T>, alpha?: number, tension?: number): CatRom<T>;
}

declare const CatRom: CatRomConstructor;
export = CatRom;
