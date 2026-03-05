import { default as React } from 'react';
interface UndoButtonProps {
    visible: boolean;
    onUndo: () => Promise<void>;
    timeRemaining: number;
}
export declare const UndoButton: React.FC<UndoButtonProps>;
export {};
//# sourceMappingURL=UndoButton.d.ts.map