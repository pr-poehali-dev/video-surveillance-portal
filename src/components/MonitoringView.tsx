import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const MonitoringView = () => {
  const cameras = [
    { id: 1, name: 'Камера №45', location: 'ул. Ленина, 23', status: 'online' },
    { id: 2, name: 'Камера №12', location: 'пр. Комсомольский, 54', status: 'online' },
    { id: 3, name: 'Камера №89', location: 'ул. Революции, 11', status: 'online' },
    { id: 4, name: 'Камера №156', location: 'пр. Парковый, 7', status: 'online' },
    { id: 5, name: 'Камера №203', location: 'ул. Пушкина, 15', status: 'online' },
    { id: 6, name: 'Камера №78', location: 'пр. Победы, 32', status: 'offline' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Мониторинг видеопотоков</h2>
          <p className="text-muted-foreground">Просмотр видео в реальном времени</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Icon name="Grid3x3" size={18} className="mr-2" />
            Сетка
          </Button>
          <Button variant="outline">
            <Icon name="Maximize" size={18} className="mr-2" />
            Полный экран
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cameras.map((camera) => (
          <Card key={camera.id} className="hover-scale overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-secondary">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon name="Video" size={48} className="text-muted-foreground opacity-50" />
                </div>
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <Badge variant="outline" className={`flex items-center gap-1 ${camera.status === 'online' ? 'bg-accent/20 border-accent' : 'bg-destructive/20 border-destructive'}`}>
                    <div className={`w-2 h-2 rounded-full ${camera.status === 'online' ? 'bg-accent' : 'bg-destructive'}`}></div>
                    {camera.status === 'online' ? 'В сети' : 'Не в сети'}
                  </Badge>
                  <Button size="icon" variant="ghost" className="bg-background/80 backdrop-blur">
                    <Icon name="Maximize2" size={16} />
                  </Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground text-sm">{camera.name}</p>
                      <p className="text-xs text-muted-foreground">{camera.location}</p>
                    </div>
                    <Button size="icon" variant="ghost">
                      <Icon name="Play" size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MonitoringView;
