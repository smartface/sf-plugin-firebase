package io.smartface.android;


public class AndroidUI {
    public AndroidUI() {
    }

    public interface WithGeometry {
        void setPosition__N (int left, int top, int width, int height, int right,
                             int bottom);

        void setVisible__N (boolean visible, boolean enabled, boolean showOnTop);

        void setElevation__N (float elevation);

        void resetZ__N (float alpha);

    }

}
