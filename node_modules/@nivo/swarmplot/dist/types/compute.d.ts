import { ScaleOrdinal } from 'd3-scale';
import { ScaleLinear, ScaleLinearSpec, ScaleTime, ScaleTimeSpec } from '@nivo/scales';
import { ComputedDatum, SizeSpec, SimulationForces } from './types';
export declare const computeOrdinalScale: ({ width, height, axis, groups, gap, }: {
    width: number;
    height: number;
    axis: 'x' | 'y';
    groups: string[];
    gap: number;
}) => ScaleOrdinal<string, number, never>;
export declare const computeValueScale: <RawDatum>({ width, height, axis, getValue, scale, data, }: {
    width: number;
    height: number;
    axis: 'x' | 'y';
    getValue: (datum: RawDatum) => number | Date;
    scale: ScaleLinearSpec | ScaleTimeSpec;
    data: RawDatum[];
}) => ScaleLinear<number> | ScaleTime<string | Date>;
export declare const getSizeGenerator: <RawDatum>(size: SizeSpec<RawDatum>) => (datum: RawDatum) => number;
export declare const computeForces: <RawDatum>({ axis, valueScale, ordinalScale, spacing, forceStrength, }: {
    axis: 'x' | 'y';
    valueScale: ScaleLinear<number> | ScaleTime<string | Date>;
    ordinalScale: ScaleOrdinal<string, number>;
    spacing: number;
    forceStrength: number;
}) => SimulationForces<RawDatum>;
export declare const computeNodes: <RawDatum>({ data, getId, layout, getValue, valueScale, getGroup, ordinalScale, getSize, forces, simulationIterations, valueScaleConfig, }: {
    data: RawDatum[];
    getId: (datum: RawDatum) => string;
    layout: 'vertical' | 'horizontal';
    getValue: (datum: RawDatum) => number | Date;
    valueScale: ScaleLinear<number> | ScaleTime<string | Date>;
    getGroup: (datum: RawDatum) => string;
    ordinalScale: ScaleOrdinal<string, number>;
    getSize: (datum: RawDatum) => number;
    forces: SimulationForces<RawDatum>;
    simulationIterations: number;
    valueScaleConfig: ScaleLinearSpec | ScaleTimeSpec;
}) => {
    [x: string]: ScaleLinear<number> | ScaleTime<string | Date> | ScaleOrdinal<string, number, never> | ComputedDatum<RawDatum>[];
    nodes: ComputedDatum<RawDatum>[];
};
//# sourceMappingURL=compute.d.ts.map