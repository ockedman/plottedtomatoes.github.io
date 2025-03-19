/// <reference types="react" />
import { ComputedDatum, SwarmPlotCanvasProps } from './types';
export declare const renderCircleDefault: <RawDatum>(ctx: CanvasRenderingContext2D, { node, getBorderWidth, getBorderColor, }: {
    node: ComputedDatum<RawDatum>;
    getBorderWidth: (node: ComputedDatum<RawDatum>) => number;
    getBorderColor: (node: ComputedDatum<RawDatum>) => string;
}) => void;
type InnerSwarmCanvasPlotProps<RawDatum> = Partial<Omit<SwarmPlotCanvasProps<RawDatum>, 'data' | 'groups' | 'width' | 'height' | 'isInteractive' | 'animate' | 'motionConfig'>> & Pick<SwarmPlotCanvasProps<RawDatum>, 'data' | 'groups' | 'width' | 'height' | 'isInteractive'>;
export declare const InnerSwarmPlotCanvas: <RawDatum>({ data, width, height, margin: partialMargin, id, value, valueFormat, valueScale, groups, groupBy, size, forceStrength, simulationIterations, colors, colorBy, borderColor, layout, spacing, gap, layers, renderCircle, debugMesh, enableGridX, gridXValues, enableGridY, gridYValues, axisTop, axisRight, axisBottom, axisLeft, isInteractive, onMouseMove, onClick, tooltip, role, pixelRatio, }: InnerSwarmCanvasPlotProps<RawDatum>) => JSX.Element;
export declare const SwarmPlotCanvas: <RawDatum>({ theme, isInteractive, animate, motionConfig, renderWrapper, ...otherProps }: Partial<Omit<SwarmPlotCanvasProps<RawDatum>, "data" | "height" | "width" | "groups">> & Pick<SwarmPlotCanvasProps<RawDatum>, "data" | "height" | "width" | "groups">) => JSX.Element;
export {};
//# sourceMappingURL=SwarmPlotCanvas.d.ts.map