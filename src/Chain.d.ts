import Spline from "Spline";
import { Knot } from "Types";

interface Chain<T extends Knot> extends Spline<T> {
	SolveArcLength(a?: number, b?: number): number;
}

interface ChainConstructor {
	new <T extends Knot>(points: Array<T>, alpha?: number, tension?: number): Chain<T>;
}

declare const Chain: ChainConstructor;
export = Chain;
