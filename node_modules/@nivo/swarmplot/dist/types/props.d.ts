/// <reference types="react" />
import { ScaleLinearSpec } from '@nivo/scales';
import { SwarmPlotLayerId } from './types';
export declare const defaultProps: {
    id: string;
    value: string;
    valueScale: ScaleLinearSpec;
    groupBy: string;
    size: number;
    spacing: number;
    layout: "vertical";
    gap: number;
    forceStrength: number;
    simulationIterations: number;
    colors: {
        scheme: string;
    };
    colorBy: string;
    borderWidth: number;
    borderColor: string;
    layers: SwarmPlotLayerId[];
    enableGridX: boolean;
    enableGridY: boolean;
    axisTop: {};
    axisRight: {};
    axisBottom: {};
    axisLeft: {};
    isInteractive: boolean;
    useMesh: boolean;
    debugMesh: boolean;
    tooltip: <RawDatum>({ id, formattedValue, color, }: import("./types").ComputedDatum<RawDatum>) => JSX.Element;
    animate: boolean;
    motionConfig: string;
    annotations: never[];
    role: string;
    pixelRatio: number;
};
//# sourceMappingURL=props.d.ts.map