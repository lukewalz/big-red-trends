import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Restore, Favorite, Folder } from '@material-ui/icons'

const BottomTabs = () => {
    return (
        <BottomNavigation>
            <BottomNavigationAction label="Recents" value="recents" icon={<Restore />} />
            <BottomNavigationAction label="Favorites" value="favorites" icon={<Favorite />} />
            <BottomNavigationAction label="Folder" value="folder" icon={<Folder />} />
        </BottomNavigation>
    )

}
export default BottomTabs;
