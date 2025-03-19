import { MouseEvent } from 'react';
import { ScaleOrdinal } from 'd3-scale';
import { AnnotationMatcher } from '@nivo/annotations';
import { ScaleLinear, ScaleLinearSpec, ScaleTime, ScaleTimeSpec } from '@nivo/scales';
import { SwarmPlotCommonProps, ComputedDatum, SizeSpec, SwarmPlotCustomLayerProps, MouseHandlers } from './types';
export declare const useValueScale: <RawDatum>({ width, height, axis, getValue, scale, data, }: {
    width: number;
    height: number;
    axis: 'x' | 'y';
    getValue: (datum: RawDatum) => number | Date;
    scale: ScaleLinearSpec | ScaleTimeSpec;
    data: RawDatum[];
}) => ScaleLinear<number> | ScaleTime<string | Date>;
export declare const useOrdinalScale: ({ width, height, axis, groups, gap, }: {
    width: number;
    height: number;
    axis: 'x' | 'y';
    groups: string[];
    gap: number;
}) => ScaleOrdinal<string, number, never>;
export declare const useForces: <RawDatum>({ axis, valueScale, ordinalScale, spacing, forceStrength, }: {
    axis: 'x' | 'y';
    valueScale: ScaleLinear<number> | ScaleTime<string | Date>;
    ordinalScale: ScaleOrdinal<string, number>;
    spacing: number;
    forceStrength: number;
}) => import("./types").SimulationForces<RawDatum>;
export declare const useSwarmPlot: <RawDatum>({ data, width, height, id, value, valueFormat, valueScale: valueScaleConfig, groups, groupBy, size, spacing, layout, gap, forceStrength, simulationIterations, colors, colorBy, }: {
    data: RawDatum[];
    width: number;
    height: number;
    id: import("@nivo/core").PropertyAccessor<RawDatum, string>;
    value: import("@nivo/core").PropertyAccessor<RawDatum, number | Date>;
    valueScale: ScaleLinearSpec | ScaleTimeSpec;
    valueFormat?: import("@nivo/core").ValueFormat<number | Date, void> | undefined;
    groups: string[];
    groupBy: import("@nivo/core").PropertyAccessor<RawDatum, string>;
    size: SizeSpec<RawDatum>;
    spacing: number;
    layout: "horizontal" | "vertical";
    gap: number;
    forceStrength: number;
    simulationIterations: number;
    colors: import("@nivo/colors").OrdinalColorScaleConfig<Omit<ComputedDatum<RawDatum>, "color">>;
    colorBy: import("@nivo/core").PropertyAccessor<Omit<ComputedDatum<RawDatum>, "color">, string>;
}) => {
    nodes: ComputedDatum<RawDatum>[];
    xScale: ScaleLinear<number> | ScaleTime<string | Date> | ScaleOrdinal<string, number, never> | ComputedDatum<RawDatum>[];
    yScale: ScaleLinear<number> | ScaleTime<string | Date> | ScaleOrdinal<string, number, never> | ComputedDatum<RawDatum>[];
    getColor: import("@nivo/colors").OrdinalColorScale<Omit<ComputedDatum<RawDatum>, "color">>;
};
export declare const useBorderWidth: <RawDatum>(borderWidth: number | ((node: ComputedDatum<RawDatum>) => number)) => (node: ComputedDatum<RawDatum>) => number;
export declare const useNodeMouseHandlers: <RawDatum>({ isInteractive, onClick, onMouseEnter, onMouseLeave, onMouseMove, tooltip, }: Pick<SwarmPlotCommonProps<RawDatum>, "tooltip" | "isInteractive"> & MouseHandlers<RawDatum>) => {
    onMouseEnter: (node: ComputedDatum<RawDatum>, event: MouseEvent) => void;
    onMouseMove: (node: ComputedDatum<RawDatum>, event: MouseEvent) => void;
    onMouseLeave: (node: ComputedDatum<RawDatum>, event: MouseEvent) => void;
    onClick: (node: ComputedDatum<RawDatum>, event: MouseEvent) => void;
};
export declare const useSwarmPlotAnnotations: <RawDatum>(nodes: ComputedDatum<RawDatum>[], annotations: AnnotationMatcher<ComputedDatum<RawDatum>>[]) => import("@nivo/annotations").BoundAnnotation<ComputedDatum<RawDatum>>[];
export declare const useSwarmPlotLayerContext: <RawDatum, Scale extends ScaleLinear<number> | ScaleTime<string | Date> | ScaleOrdinal<string, number, never>>({ nodes, xScale, yScale, innerWidth, innerHeight, outerWidth, outerHeight, margin, }: SwarmPlotCustomLayerProps<RawDatum, Scale>) => SwarmPlotCustomLayerProps<RawDatum, Scale>;
//# sourceMappingURL=hooks.d.ts.map