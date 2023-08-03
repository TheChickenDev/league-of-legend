import { useEffect, useRef } from 'react';

function useCanvas(draw) {
    const ref = useRef();

    useEffect(() => {
        const canvas = ref.current;
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        let count = 0;

        canvas.width = rect.width * devicePixelRatio;
        canvas.height = rect.height * devicePixelRatio;

        ctx.scale(devicePixelRatio, devicePixelRatio);

        canvas.style.width = rect.width + 'px';
        canvas.style.height = rect.height + 'px';

        let animationID;

        const renderer = () => {
            draw(ctx, rect);
            count++;
            if (count < 50) animationID = window.requestAnimationFrame(renderer);
            else window.cancelAnimationFrame(animationID);
        };

        renderer();

        return () => window.cancelAnimationFrame(animationID);
    }, [draw]);

    return ref;
}

export default useCanvas;
