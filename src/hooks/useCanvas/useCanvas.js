import { useEffect, useRef } from 'react';

function useCanvas(draw) {
    const ref = useRef();

    useEffect(() => {
        const canvas = ref.current;
        const ctx = canvas.getContext('2d');

        let animationID;

        const renderer = () => {
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * devicePixelRatio;
            canvas.height = rect.height * devicePixelRatio;

            ctx.scale(devicePixelRatio, devicePixelRatio);

            canvas.style.width = rect.width + 'px';
            canvas.style.height = rect.height + 'px';
            draw(ctx, rect);
            window.requestAnimationFrame(renderer);
        };

        renderer();

        return () => window.cancelAnimationFrame(animationID);
    }, [draw]);

    return ref;
}

export default useCanvas;
