import React from "react";

type ErrorState = {
    hasError: boolean;
}

type Props = {
    fallback: React.ReactNode;
    children: React.ReactNode;
};

export class ErrorBoundary extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static getDerivedStateFromError(_error: unknown) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    componentDidCatch(_error: unknown, _info: unknown) {
    }

    render() {
        if (this.getState().hasError) {
            return this.props.fallback;
        }

        return this.props.children;
    }

    private getState(): ErrorState {
        return this.state as ErrorState;
    }
}