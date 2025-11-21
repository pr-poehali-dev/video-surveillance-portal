import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const DashboardView = () => {
  const stats = [
    { label: 'Всего камер', value: '247', icon: 'Video', color: 'text-primary' },
    { label: 'Активных', value: '238', icon: 'CheckCircle', color: 'text-accent' },
    { label: 'Неактивных', value: '9', icon: 'AlertCircle', color: 'text-destructive' },
    { label: 'Событий за сутки', value: '1,284', icon: 'Activity', color: 'text-primary' },
  ];

  const recentEvents = [
    { id: 1, camera: 'Камера №45', location: 'ул. Ленина, 23', time: '14:23', status: 'Движение обнаружено' },
    { id: 2, camera: 'Камера №12', location: 'пр. Комсомольский, 54', time: '14:18', status: 'Активность зафиксирована' },
    { id: 3, camera: 'Камера №89', location: 'ул. Революции, 11', time: '14:12', status: 'Движение обнаружено' },
    { id: 4, camera: 'Камера №156', location: 'пр. Парковый, 7', time: '14:05', status: 'Запись начата' },
  ];

  const activeCameras = [
    { id: 1, name: 'Камера №45', location: 'Центральный район', status: 'online' },
    { id: 2, name: 'Камера №12', location: 'Дзержинский район', status: 'online' },
    { id: 3, name: 'Камера №89', location: 'Ленинский район', status: 'online' },
    { id: 4, name: 'Камера №156', location: 'Свердловский район', status: 'online' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Главная панель</h2>
        <p className="text-muted-foreground">Обзор системы видеонаблюдения</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="hover-scale">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                </div>
                <div className={`${stat.color} bg-secondary rounded-lg p-3`}>
                  <Icon name={stat.icon} size={24} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Activity" size={20} />
              Последние события
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentEvents.map((event) => (
                <div key={event.id} className="flex items-start gap-4 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Camera" size={20} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground">{event.camera}</p>
                    <p className="text-sm text-muted-foreground">{event.location}</p>
                    <p className="text-xs text-muted-foreground mt-1">{event.status}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">{event.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Video" size={20} />
              Активные камеры
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeCameras.map((camera) => (
                <div key={camera.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Icon name="Video" size={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{camera.name}</p>
                      <p className="text-sm text-muted-foreground">{camera.location}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    Online
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardView;
