'use client';
import { Component } from 'react';
import ErrorPage from 'next/error';
import { reportErrorToExternalService } from '@utils/errorReporting'; // Example error reporting utility

class GlobalErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        // Update state to indicate error has occurred
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // Log the error to an external error reporting service
        reportErrorToExternalService(error, errorInfo);
    }

    render() {
        const { hasError, error } = this.state;

        if (hasError) {
            // Display a custom error page or message
            return <ErrorPage statusCode={500} title="Something went wrong" />;
        }

        // Render children normally
        return this.props.children;
    }
}

export default GlobalErrorBoundary;
